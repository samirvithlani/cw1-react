import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setisLoading] = useState(false);
  const validationSchema = {
    name: {
      required: {
        value: true,
        message: "Name is required",
      },
    },
    email: {
      required: {
        value: true,
        message: "Email is required",
      },
    },
    age: {
      required: {
        value: true,
        message: "Age is required",
      },
      min: {
        value: 18,
        message: "Age must be greater than 18",
      },
    },
  };

  const submitHandler = async (data) => {
    var userObj = {
      name: data.name,
      email: data.email,
      age: parseInt(data.age),
      isActive: data.isActive === "true" ? true : false,
    };
    console.log(userObj);

    setisLoading(true);
    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );
    console.log(res.data);

    reset();
    setisLoading(false);
    toast.success('User added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <h1>ADD USER</h1>
      {isLoading && (
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      )}

      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              {...register("name", validationSchema.name)}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              {...register("email", validationSchema.email)}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <label>Age</label>
            <input
              type="text"
              name="age"
              {...register("age", validationSchema.age)}
            />
            {errors.age && <span>{errors.age.message}</span>}
          </div>
          <div>
            <label>STATUS</label>
            TRUE:{" "}
            <input
              type="radio"
              value="true"
              name="isActive"
              {...register("isActive")}
            ></input>
            FALSE:{" "}
            <input
              type="radio"
              value="false"
              name="isActive"
              {...register("isActive")}
            ></input>
          </div>
          <div>
            <button type="submit">ADD USER</button>
          </div>
        </form>
      </div>
    </div>
  );
};
