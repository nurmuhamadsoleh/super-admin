import { useState } from "react";
import { Table, Badge } from "reactstrap";
import { format } from "date-fns";
import eye from "../../../assets/images/icons/eye.png";
import downloadIcon from "../../../assets/images/icons/umkm_faktur.png";

// headerList = # (id),PESANAN,WAKTU,PELANGGAN, STATUS PEMBAYARAN, TOTAL, STATUS PESANAN, TIPE PESANAN, AKSI

const UMKMOrderTable = ({
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
  bordered = true,
  sortBy,
}) => {
  const [arrowUpActive, setArrowUp] = useState(true);
  const [arrowDownActive, setArrowDown] = useState(false);

  const handleClick = (fn) => {
    if (!sortBy) return;
    setArrowUp(!arrowUpActive);
    setArrowDown(!arrowDownActive);
    return (arr, key, order) => {
      fn(arr, [key], [order]);
    };
  };

  const handleDateClick = (fn) => {
    if (!sortBy) return;
    setArrowUp(!arrowUpActive);
    setArrowDown(!arrowDownActive);
    return (tableData) => {
      fn(tableData);
    };
  };

  return (
    <Table className={`overflow-auto ${className}`} bordered={bordered} hover responsive striped={striped}>
      <thead style={{ borderStyle: "hidden" }} className="text-center">
        <tr>
          {headers.map((header, idx) => {
            if (header === "_id") {
              return <th key={idx}></th>;
            }
            if (header === "#") {
              return (
                <th key={idx} className="pb-3">
                  #
                </th>
              );
            }

            if (header.toLowerCase() !== "aksi") {
              return (
                <th key={idx} style={{ borderStyle: "hidden" }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>{header}</div>
                    <div>
                      {header.toLowerCase() !== "waktu" ? (
                        <>
                          <i
                            className={`fas fa-chevron-up ${arrowUpActive ? "text-secondary" : ""}`}
                            style={{ fontSize: "10px", cursor: "pointer" }}
                            onClick={() => handleClick(sortBy[header](tableData, [header], ["asc"]))}
                          ></i>
                          <br />
                          <i
                            className={`fas fa-chevron-down ${arrowDownActive ? "text-secondary" : ""}`}
                            style={{ fontSize: "10px", cursor: "pointer" }}
                            onClick={() => handleClick(sortBy[header](tableData, [header], ["desc"]))}
                          ></i>
                        </>
                      ) : (
                        <>
                          <i
                            className={`fas fa-chevron-up ${arrowUpActive ? "text-secondary" : ""}`}
                            style={{ fontSize: "10px", cursor: "pointer" }}
                            onClick={() => handleDateClick(sortBy[header].asc(tableData))}
                          ></i>
                          <br />
                          <i
                            className={`fas fa-chevron-down ${arrowDownActive ? "text-secondary" : ""}`}
                            style={{ fontSize: "10px", cursor: "pointer" }}
                            onClick={() => handleDateClick(sortBy[header].desc(tableData))}
                          ></i>
                        </>
                      )}
                    </div>
                  </div>
                </th>
              );
            }

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

                if (header.toLowerCase() === "waktu") {
                  return (
                    <td className="text-center py-3" key={header + innerIndex}>
                      {format(new Date(data.WAKTU), "dd MMM yyyy")}
                    </td>
                  );
                }

                if (header.toLowerCase() === "status pembayaran") {
                  return (
                    <td key={header + innerIndex} className="mt-1 py-3">
                      {data[header].toLowerCase() === "belum dibayar" ? (
                        <Badge pill style={{ backgroundColor: "#FBE6E6", color: "#E02B2B" }} color="secondary">
                          {data[header]}
                        </Badge>
                      ) : (
                        <Badge pill style={{ backgroundColor: "#E5F8ED", color: "#28C76F" }} color="secondary">
                          {data[header]}
                        </Badge>
                      )}
                    </td>
                  );
                }

                if (header.toLowerCase() === "status pesanan") {
                  return (
                    <td key={header + innerIndex} className="mt-1 py-3">
                      {data[header].toLowerCase() === "diterima" ? (
                        <Badge pill style={{ backgroundColor: "#FBE6E6", color: "#E02B2B" }} color="secondary">
                          {data[header]}
                        </Badge>
                      ) : (
                        <Badge pill style={{ backgroundColor: "#E5F8ED", color: "#28C76F" }} color="secondary">
                          {data[header]}
                        </Badge>
                      )}
                    </td>
                  );
                }
                if (header.toLowerCase() === "tipe pesanan") {
                  return (
                    <td key={header + innerIndex} className="mt-1 py-3">
                      <Badge pill style={{ backgroundColor: "#E5F8ED", color: "#28C76F" }} color="secondary">
                        {data[header]}
                      </Badge>
                    </td>
                  );
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

                        return (
                          <img
                            onClick={() => onClickEdit(data._id)}
                            style={{ cursor: "pointer", width: "60px", height: "20px" }}
                            src={downloadIcon}
                            alt="download"
                            className="mx-2"
                            key={actionIndex}
                          />
                        );
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

export default UMKMOrderTable;
