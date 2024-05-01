//using react-hook-form
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schemaValidation = yup.object({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  // errors = formState.errors
  console.log(errors);
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100 focus:border-[rgba(41, 121, 255, 1)]"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">{errors.firstName.message}</div>
        )}
        {/* {errors?.firstName?.type === "max" && (
          <div className="text-red-500 text-sm">{errors.firstName.message}</div>
        )} */}
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Lastname</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-100 focus:border-[rgba(41, 121, 255, 1)]"
            {...register("lastName")}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="p-4 rounded-md border border-gray-100 focus:border-[rgba(41, 121, 255, 1)]"
            {...register("email")}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
