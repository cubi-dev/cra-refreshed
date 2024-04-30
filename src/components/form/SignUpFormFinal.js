import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Firstname is required"),
        lastName: Yup.string().required("Lastname is required"),
        email: Yup.string().email().required("Email is required"),
        intro: Yup.string().required("Intro is required"),
        job: Yup.string().required("Job is required"),
        terms: Yup.boolean()
          .required("Terms is required")
          .oneOf([true], "You must accept the terms and conditions"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        <MyInput
          label="First Name"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
        ></MyInput>
        <MyInput
          label="Last Name"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
        ></MyInput>
        <MyInput
          label="Email Address"
          name="email"
          id="email"
          type="email"
          placeholder="Enter your email address"
        ></MyInput>
        <MyTextarea
          label="Introduce yourself"
          name="intro"
          id="intro"
          placeholder="Enter your introduce"
        ></MyTextarea>
        <MySelectBox label="Select your job" name="job">
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="fullstack">Fullstack Developer</option>
        </MySelectBox>
        <MyCheckBox name="terms">I accept the terms and conditions</MyCheckBox>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-md border border-gray-100"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(meta);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {/* {children} */}
        <p>{children}</p>
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
