import React, { useState } from 'react'
import { Document, Page,pdfjs } from 'react-pdf'; 

export const LoadPdf = () => {
    const url =  "./abc.pdf"

  
    pdfjs.GlobalWorkerOptions.workerSrc =  
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
     const [numPages, setNumPages] = useState(null); 
      const [pageNumber, setPageNumber] = useState(1); 
  
    function onDocumentLoadSuccess({ numPages }) { 
    setNumPages(numPages); 
    setPageNumber(1); 
  } 
  function onDocumentLoadSuccess({ numPages }) { 
    setNumPages(numPages); 
    setPageNumber(1); 
  } 
  return (
    <div>
        <h1>LOAD PDF</h1>
        <div className="main"> 
      <Document 
        file={url} 
        onLoadSuccess={onDocumentLoadSuccess} 
        > 
        <Page pageNumber={pageNumber} /> 
      </Document> 
     </div> 
    </div>
  )
}
