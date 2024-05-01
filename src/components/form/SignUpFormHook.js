//using react-hook-form
import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
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
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
    reset,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  // console.log("isValid", isValid);
  // console.log("isDirty", isDirty);
  // console.log("dirtyFields", dirtyFields);
  const watchShowAge = watch("showAge", false);
  // console.log("watchShowAge", watchShowAge);
  const onSubmit = async (values) => {
    if (isValid) {
      console.log("Send data to server: ", values);
      //After submit, reset form
      reset({ firstName: "", lastName: "", email: "" });
    }
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 5000);
    // });
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const handleSetDemoData = () => {
    setValue("firstName", "Cubidev");
    setValue("lastName", "dung");
    setValue("email", "abc@gmail.com");
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
      </div>
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
        <MyInput
          name="email"
          placeholder="Enter your email address"
          id="email"
          control={control}
        ></MyInput>
        {/* <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="p-4 rounded-md border border-gray-100 focus:border-[rgba(41, 121, 255, 1)]"
          {...register("email")}
        /> */}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input type="number" placeholder="Please enter your age" />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <div>
        <button
          className="p-3 bg-green-500 text-wrap"
          onClick={handleSetDemoData}
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border border-gray-100 focus:border-[rgba(41, 121, 255, 1)]"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-100 focus:border-[rgba(41, 121, 255, 1)]"
      {...field}
      {...props}
    />
  );
};

export default SignUpFormHook;
