import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ViewPdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [books, setbooks] = useState([]);

  const getBookData = async () => {
    const res = await axios.get("http://localhost:3001/book/getall");
    console.log(res.data.data);
    setbooks(res.data.data);
  };

  useEffect(() => {
    getBookData();
  }, []);


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <h2>PDF Viewer</h2>
      <div>
        {
            
        }
        <Document
          file={`https://drive.google.com/uc?export=view&id=${books[4]?.googleDriveId}`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div>
        <button
          onClick={() => setPageNumber((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPageNumber((prevPage) => Math.min(prevPage + 1, numPages))}
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ViewPdf;
