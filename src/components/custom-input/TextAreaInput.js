import React from "react";
import { Field, ErrorMessage } from "formik";
import { Label } from "reactstrap";
const TextAreaInput = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <Label htmlFor={name} className="d-block">
        {label}
      </Label>
      <Field className="w-100" as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
};
export default TextAreaInput;
