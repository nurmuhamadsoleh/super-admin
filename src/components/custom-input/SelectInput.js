import { Field, ErrorMessage } from "formik";

import { Label } from "reactstrap";
const SelectInput = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <Label className="d-block" htmlFor={name}>
        {label}
      </Label>
      <Field className="d-block w-100" as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option className="w-100" key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} className="d-block" />
    </div>
  );
};

export default SelectInput;
