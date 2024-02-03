import axios from "axios";
import React, { useEffect, useState } from "react";

export const FetchBooks = () => {
    const [imageUrl, setimageUrl] = useState("")
  const fetchBook = async () => {
    try{
      const response = await axios.get(`http://localhost:3001/api/drive/15_b5dWi75kLAJR9hHO2vhoE_p1EbCY0T`);
      console.log(response);
    }catch(err){

      console.log(err)
    }

  };
  useEffect(() => {
    
  
        fetchBook();
  }, [])
  
  return <div>
    <h1>CAlled</h1>
    <img src={imageUrl} alt="no image" width="100px"/>
  </div>;
};
