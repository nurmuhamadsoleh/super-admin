import { Table } from "reactstrap";
import trash from "../../../assets/images/icons/trash.png";
import eye from "../../../assets/images/icons/eye.png";

const UMKMKaryawanTable = ({
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

                if (header.toLowerCase() === "aksi") {
                  return (
                    <td key={header + innerIndex} className="py-3">
                      {data[header].map((action, actionIndex) => {
                        if (action === "read") {
                          return (
                            <img
                              onClick={() => onClickEdit(data._id)}
                              style={{ cursor: "pointer", width: "20px", height: "20px" }}
                              src={eye}
                              alt="check"
                              className="mx-2"
                              key={actionIndex}
                            />
                          );
                        }

                        if (action === "delete") {
                          return (
                            <img
                              onClick={() => onClickDelete(data)}
                              style={{ cursor: "pointer", width: "20px", height: "20px" }}
                              src={trash}
                              alt="check"
                              className="mx-2"
                              key={actionIndex}
                            />
                          );
                        }

                        return 1;
                      })}
                    </td>
                  );
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

export default UMKMKaryawanTable;
