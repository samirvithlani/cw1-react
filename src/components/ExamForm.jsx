import React from "react";
import { useForm } from "react-hook-form";

export const ExamForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:'all'});


  console.log("error..", errors);
  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema = {
    name: {
      required: { value: true, message: "Name is required.." },
    },
    age:{

            required:{
                value:true,
                message:"Age is required.."
            },
            min:{
                value:18,
                message:"Age must be greater than 18.."
            }

    },
    address :{
        required:{
            value:true,
            message:"Address is required.."
        },
        minLength:{
            value:10,
            message:"Address must be greater than 10 character.."
        },
        maxLength:{
            value:30,
            message:"Address must be less than 30 character.."
        }
    }
  };

  return (
    <div>
      <h1>EXAM FORM..</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">NAME</label>
          {/* <input
            type="text"
            {...register("name", {
              required: { value: true, message: "Name is required.." },
            })}
          ></input> */}

          <input type="text" {...register("name", validationSchema.name)} />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </div>
        <div>
            <label htmlFor="age">AGE</label>
            <input type="number" {...register("age",validationSchema.age)}></input>
            {
                errors.age && <span style={{color:"red"}}>{errors.age.message}</span>
            }
        </div>
        <div>
            <label htmlFor="address">ADDRESS</label>
            <input type="text" {...register("address",validationSchema.address)}></input>
            {
                errors.address && <span style={{color:"red"}}>{errors.address.message}</span>
            }
        </div>
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
