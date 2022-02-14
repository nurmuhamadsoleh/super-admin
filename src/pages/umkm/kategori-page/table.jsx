import { Table } from "reactstrap";

const UMKMKategoriTable = ({
  headers = [],
  tableData = [],
  onClickEdit = (e) => {
    return e;
  },
  onClickDelete = (e) => {
    return e;
  },
  striped = false,
  className = "",
  bordered = false,
  borderless = true,
}) => {
  return (
    <Table
      className={`overflow-auto ${className}`}
      bordered={bordered}
      hover
      borderless={borderless}
      responsive
      striped={striped}
    >
      {/* headers: #, id, nama */}
      <thead style={{ borderStyle: "hidden" }} className="text-center">
        <tr>
          {headers.map((header, idx) => {
            return (
              <th key={idx} className="align-middle" style={{ borderStyle: "hidden" }}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody className="align-middle text-center">
        {tableData.map((data, index) => {
          return (
            <tr key={index} className="py-3">
              {Object.keys(data).map((header, innerIndex) => {
                if (header === "_id") {
                  return null;
                }
                return (
                  <td key={header + innerIndex} className="py-3">
                    {data[header]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UMKMKategoriTable;
