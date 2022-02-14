import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";
const FormikController = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <TextInput {...rest} />;
    case "textarea":
      return <TextAreaInput {...rest} />;
    case "select":
      return <SelectInput {...rest} />;
    case "radio":
      return <RadioInput {...rest} />;
    //   case "checkbox":
    //     return <CheckBoxes {...rest} />
    default:
      return null;
  }
};
export default FormikController;
