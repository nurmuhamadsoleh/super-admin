import { Field, ErrorMessage } from "formik";

import { Label } from "reactstrap";
const RadioInput = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <Label className="d-block">{label}</Label>
      <Field name={name} className="d-block w-100">
        {(formik) => {
          const { field } = formik;
          return options.map((option) => {
            return (
              <span key={option.key}>
                <Label htmlFor={option.value}>{option.key}</Label>
                <input
                  className="m-2"
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
              </span>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} className="d-block" />
    </div>
  );
};

export default RadioInput;
