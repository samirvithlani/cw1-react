import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

export const Products = () => {
    const dispatch  = useDispatch()
  return (
    <div>
      <div>
        <h1>Product 1</h1>
        <p>Product 1 description</p>
        <button onClick={()=>{dispatch(addToCart({id:1,name:"product 1"}))}}>Add to Cart</button>
      </div>
      <div>
        <h1>Product 2</h1>
        <p>Product 1 description</p>
        <button onClick={()=>{dispatch(addToCart({id:2,name:"product 2"}))}}>Add to Cart</button>
      </div>
    </div>
  );
};
