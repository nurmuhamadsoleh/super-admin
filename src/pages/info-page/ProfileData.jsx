import { useState } from "react";
import { Card, Container, Label } from "reactstrap";
import { SubTitle } from "../../components";
import AvaPlaceholder from "../../assets/images/avatar_placeholder.png";
import { ImageUploader } from "../../components";
const ProfileData = () => {
  const [imageFiles, setImageFiles] = useState({});

  return (
    <Container>
      <SubTitle title="Data Profil" />
      <Card className="p-3 w-50 mt-4">
        <Label>
          <b>Masukan Foto</b>
        </Label>

        <div className="d-flex flex-row align-items-center w-100 my-3">
          <ImageUploader setImageFiles={setImageFiles} imageFiles={imageFiles} />
        </div>
        <Label>
          <b>Preview</b>
        </Label>
        <img
          src={imageFiles.preview || AvaPlaceholder}
          alt="profile"
          style={{ height: "200px", width: "100%", maxWidth: "200px" }}
        />
        <Label>
          <b>Masukan Dokumen</b>
        </Label>
      </Card>
    </Container>
  );
};

export default ProfileData;
