import { useState } from "react";
import { Card, Container } from "reactstrap";
import { orderBy } from "lodash";

import { SubTitle } from "../../components";
import { CustomTable } from "../../components";

const ACTIVITY_HISTORY_HEADER = ["Nama", "Jabatan", "Fitur", "Aksi", "Konten", "Waktu"];
const ACTIVITY_HISTORY_TABLE_DATA = [
  {
    Nama: "Riki Irawan",
    Jabatan: "Sekretaris Desa",
    Fitur: "Surat",
    Aksi: ["detail"],
    Konten: "421-073/DS-203/VII/2021",
    Waktu: "25-12-2021 02:18:21",
  },
  {
    Nama: "Anjas Mara",
    Jabatan: "Wakil Sekretaris Desa",
    Fitur: "Surat",
    Aksi: ["detail"],
    Konten: "421-073/DS-203/VII/2021",
    Waktu: "25-12-2021 02:18:21",
  },
  {
    Nama: "Riki Irawa",
    Jabatan: "Sekretaris Desa",
    Fitur: "Surat",
    Aksi: ["detail"],
    Konten: "421-073/DS-203/VII/2021",
    Waktu: "25-12-2021 02:18:21",
  },
];

const ActivityHistory = () => {
  const [tableData, setTableData] = useState(ACTIVITY_HISTORY_TABLE_DATA);

  const sortFn = (arr, keyToSort, order) => {
    const sorted = orderBy(arr, [keyToSort], [order]);
    setTableData(sorted);
    console.log(`sorted by ${keyToSort}, ${order}: `, sorted);
  };

  //except 'aksi', 'check', '_id', all keys must be the same as TABLE_HEADER
  const sortBy = {
    Fitur: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    Jabatan: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    Waktu: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    Konten: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    Nama: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
  };

  return (
    <Container className="px-2">
      <SubTitle title="Riwayat Aktivitas" />
      <Card className="my-3 overflow-scroll">
        <CustomTable bordered={false} headers={ACTIVITY_HISTORY_HEADER} tableData={tableData} sortBy={sortBy} />
      </Card>
    </Container>
  );
};

export default ActivityHistory;
