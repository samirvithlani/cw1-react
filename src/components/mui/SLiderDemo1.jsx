import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import axios from "axios";

export const SLiderDemo1 = () => {
    const [value, setvalue] = useState(1000)
    const [products, setproducts] = useState([])

    const getAllProducts= async()=>{

        const res = await axios.get("http://localhost:3001/product/productfil/"+value)
        console.log(res.data)
        setproducts(res.data.data)

    }
    useEffect(() => {
        getAllProducts()
    
      
    }, [value])
    
  function valuetext(value) {
    setvalue(value);
    return `${value}°C`;
  }
  return (
    <div>
      <Box sx={{ width: 300, alignItems: "center", pl: 10 }}>
        {value}
        <Slider
          aria-label="Temperature"
          defaultValue={1000}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          min={1000}
          max={10000}
        />
      </Box>
      <table className="table">
        <thead>
            <tr>
                <td>name</td>
                <td>price</td>
                <td>status</td>
            </tr>
        </thead>
        <tbody>
            {
                products?.map((prod)=>{
                    return(<tr>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <td>{prod.status==true?"TRUE" :"FALSE"}</td>
                    </tr>)
                })
            }
        </tbody>
      </table>
    </div>
  );
};
