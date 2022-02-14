import { useHistory } from "react-router";
import { Card, Container } from "reactstrap";
import { CustomTable, SubTitle } from "../../components";
import { useRouteMatch } from "react-router-dom";

const DATA_INFO_HEADER = ["DIBUAT", "JABATAN", "JUDUL", "TANGGAL", "AKSI"];

const DATA_INFO_TABLE_DATA = [
  {
    DIBUAT: "Asep",
    JABATAN: "Garut",
    JUDUL: "Aktif",
    TANGGAL: "",
    AKSI: ["read", "delete"],
  },
  {
    DIBUAT: "Erik",
    JABATAN: "Jakarta",
    JUDUL: "Aktif",
    TANGGAL: "",
    AKSI: ["read", "delete"],
  },
  {
    DIBUAT: "Dadang",
    JABATAN: "Bandung",
    JUDUL: "Aktif",
    TANGGAL: "",
    AKSI: ["read", "delete"],
  },
];

const DataInfo = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const onAddInfo = () => {
    history.push(`${path}/add`);
  };

  return (
    <Container>
      <SubTitle title="Data Info" addButton={true} addFunction={onAddInfo} />
      <Card className="mt-4">
        <CustomTable headers={DATA_INFO_HEADER} tableData={DATA_INFO_TABLE_DATA} />
      </Card>
    </Container>
  );
};

export default DataInfo;
