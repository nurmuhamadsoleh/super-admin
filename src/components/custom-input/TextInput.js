import { Field, ErrorMessage } from "formik";
import { Label } from "reactstrap";

import "./style.scss";
const TextInput = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div>
      <Label className="d-block" htmlFor={name}>
        {label}
      </Label>
      <Field name={name} {...rest} className="d-block w-100" />
      <ErrorMessage name={name} />
    </div>
  );
};
export default TextInput;
