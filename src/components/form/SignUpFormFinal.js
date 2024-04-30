import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
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
        {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-100 "
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div> */}
        <MyInput
          label="Last Name"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
        ></MyInput>
        {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-100 "
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div> */}
        <MyInput
          label="Email Address"
          name="email"
          id="email"
          type="email"
          placeholder="Enter your email address"
        ></MyInput>
        {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email Address</label>
          <Field
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="p-4 rounded-md border border-gray-100 "
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div> */}
        <MyTextarea
          label="Introduce yourself"
          name="intro"
          id="intro"
          placeholder="Enter your introduce"
        ></MyTextarea>
        {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Introduce yourself</label>
          <Field
            name="intro"
            id="intro"
            placeholder="Enter your introduce"
            className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
            as="textarea"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div> */}
        <MySelectBox label="Select your job" name="job">
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="fullstack">Fullstack Developer</option>
        </MySelectBox>

        {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">Select your job</label>
          <Field
            name="job"
            className="p-4 rounded-md border border-gray-100"
            as="select"
          >
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div> */}
        <MyCheckBox name="terms">I accept the terms and conditions</MyCheckBox>
        {/* <div className="flex items-center gap-2 mb-5">
          <Field
            name="terms"
            type="checkbox"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <p>I accept the terms and conditions</p>
          <div className="text-sm text-red-500">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div> */}

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

// custom Field Formik = useField
// {label, ...props} : rest parameter
// {...field[0]} : spread operator
const MyInput = ({ label, ...props }) => {
  // console.log(props);
  // const field = useField(props);
  const [field, meta] = useField(props);
  // console.log(field);
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
