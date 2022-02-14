<FormikController control="text" type="text" label="Tempat Lahir *" name="tempat_lahir" placeholder="Tempat Lahir" />;

<FormikController
  control="radio"
  label="Akta Kelahiran *"
  name="akta_kelahiran"
  options={[
    { key: "Ada", value: true },
    { key: "Tidak", value: false },
  ]}
/>;

<FormikController
  control="select"
  label="Agama *"
  name="agama"
  options={[
    { key: "Islam", value: "Islam" },
    { key: "Kristen", value: "Kristen" },
    { key: "Katholik", value: "Katholik" },
    { key: "Hindu", value: "Hindu" },
    { key: "Buddha", value: "Buddha" },
    { key: "Khonghucu", value: "Khonghucu" },
    { key: "Lainnya", value: "Lainnya" },
  ]}
/>;

<FormikController control="textarea" type="textarea" label="Alamat *" name="alamat" placeholder="Alamat" />;
