import { useCallback, useRef } from "react";
import { Button, Col } from "reactstrap";
import { useDropzone } from "react-dropzone";

const ImageUploader = ({ setImageFiles, imageFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setImageFiles((prevState) => ({
        ...prevState,
        preview: URL.createObjectURL(acceptedFiles[0]),
        file: acceptedFiles,
      }));
    },
    [setImageFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop,
    multiple: false,
  });
  return (
    <Col
      {...getRootProps({ refKey: "innerref" })}
      className="d-flex flex-row justify-content-start align-items-center w-100 "
    >
      <input {...getInputProps()} />
      <Button color="primary" className="px-4" type="button">
        Browse
      </Button>
      <p className="m-0 p-0 mx-2">
        {imageFiles && imageFiles.file?.length ? imageFiles.file[0].name : "Tidak ada file dipilih"}
      </p>
    </Col>
  );
};

export default ImageUploader;
