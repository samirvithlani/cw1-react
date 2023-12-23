import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const AddBook = () => {
  const { register, handleSubmit, reset } = useForm();
  const submitHandler = async(data) => {

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("qty", data.qty);
    formData.append("genere", data.genere);
    formData.append("ratings", data.ratings);
    formData.append("bookImage", data.bookImage[0]);

    const res = await axios.post("http://localhost:3001/book/create", formData)
    console.log(res.data);
    
  };

  return (
    <div>
      <h1>ADD BOOK</h1>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="bookName">BOOK NAME</label>
            <input
              type="text"
              name="bookName"
              id="bookName"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="bookprice">BOOK price</label>
            <input type="text" {...register("price")}/>
          </div>
          <div>
            <label htmlFor="bookQty">BOOK Qty</label>
            <input type="text" {...register("qty")}/>
          </div>
          <div>
            <label htmlFor="bookGenere">BOOK Genere</label>
            <input type="text" {...register("genere")}/>
          </div>
          <div>
            <label htmlFor="bookRatings">BOOK Ratings</label>
            <input type="text" {...register("ratings")}/>
          </div>
          <div>
            <input
              type="file"
              name="bookImage"
              id="bookImage"
              {...register("bookImage")}
            />
          </div>

          <div>
            <input type="submit" value="ADD BOOK" />
          </div>
        </form>
      </div>
    </div>
  );
};
