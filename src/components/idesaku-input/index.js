// import { Input, Label, Col } from "reactstrap";
// import { useController } from "react-hook-form";

// const IdesakuInput = (props) => {
//   let {
//     control,
//     defaultValue = "",
//     errorMessage = "Wajib diisi",
//     id = "",
//     label = "",
//     name = "",
//     options = [],
//     placeholder = "",
//     rules = { required: false },
//     type = "text",
//     value = "",
//   } = props;

//   const { field, fieldState } = useController({
//     control,
//     defaultValue: defaultValue,
//     name,
//     rules,
//   });
//   // const radioValue = type === "radio" ? { checked: field.value.toString() } : { value: field.value };

//   if (type === "select") {
//     return (
//       <>
//         {label && <Label for={id}>{label}</Label>}
//         <Input value={field.value} name={name} onChange={field.onChange} placeholder={placeholder} type={type} id={id}>
//           {options.map((opt, index) => (
//             <option key={index}>{opt}</option>
//           ))}
//         </Input>
//         {fieldState.error && (
//           <p className="mt-2" style={{ fontSize: "12px", color: "gray" }}>
//             {errorMessage}
//           </p>
//         )}
//       </>
//     );
//   }

//   if (type !== "select") {
//     return (
//       <Col>
//         <div className={`${type === "radio" ? "d-flex p-0 flex-col-reverse" : ""}`}>
//           {label && (
//             <Label className="mr-3" for={id}>
//               {label}
//             </Label>
//           )}
//           <Input
//             className={`${type === "radio" ? "m-2" : ""}`}
//             // {...props}
//             value={field.value}
//             // {...radioValue}
//             defaultValue={field.value}
//             // checked={field.value}
//             name={name}
//             onChange={field.onChange}
//             placeholder={placeholder}
//             type={type}
//             id={id}
//             // value={field.value}
//           />
//         </div>
//         {fieldState.error && (
//           <p className="mt-2" style={{ fontSize: "12px", color: "gray" }}>
//             {errorMessage}
//           </p>
//         )}
//       </Col>
//     );
//   }
// };

// export default IdesakuInput;
