import { useState } from "react";
import { Input, Table, Badge, Button } from "reactstrap";
import { format } from "date-fns";
import Switch from "react-switch";
import check from "../../assets/images/icons/active.png";
import trash from "../../assets/images/icons/trash.png";
import eye from "../../assets/images/icons/eye.png";

// headers = ["firstHeader", "secondHeader"]
// tableData  = [{}] , property name should match headers element

// <CustomTable headers=[{}] />

const CustomTable = ({
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
      <thead style={{ borderStyle: "hidden" }}>
        <tr>
          {headers.map((header, idx) => {
            if (header === "_id") {
              return <th key={idx}></th>;
            }

            if (header.toLowerCase() !== "aksi") {
              return (
                <th key={idx} style={{ borderStyle: "hidden" }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>{header}</div>
                    <div>
                      {header !== "Tanggal Pendaftaran" && header !== "TANGGAL" ? (
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

      <tbody className="align-middle">
        {tableData.map((data, index) => {
          return (
            <tr key={index} className="py-3">
              {Object.keys(data).map((header, innerIndex) => {
                if (header === "_id") {
                  return null;
                }
                if (header === "check")
                  return (
                    <td className="text-center py-3" key={header + innerIndex}>
                      <Input type="checkbox" className="m-0 p-0 align-middle" />
                    </td>
                  );

                if (header === "TANGGAL") {
                  return (
                    <td className="text-center py-3" key={header + innerIndex}>
                      {format(new Date(data.TANGGAL), "dd/MM/yyyy hh:mm:ss")}
                    </td>
                  );
                }

                if (header === "STATUS") {
                  return (
                    <td key={header + innerIndex} className="mt-1 py-3">
                      <Badge pill style={{ backgroundColor: "#F2F2F2", color: "#34C369" }} color="secondary">
                        {data[header]}
                      </Badge>
                      {/* <p>
                      </p> */}
                    </td>
                  );
                }

                if (header.toLowerCase() === "rating") {
                  return (
                    <td key={header + innerIndex} className="mt-1 py-3">
                      <Button color="primary">
                        {data[header]} <i className="fas fa-star"></i>
                      </Button>
                    </td>
                  );
                }

                if (header.toLowerCase() === "ulasan") {
                  return (
                    <td key={header + innerIndex} className="mt-1 py-3" style={{ maxWidth: "200px" }}>
                      {data[header]}
                      {/* <p>
                      </p> */}
                    </td>
                  );
                }

                if (header.toLowerCase() === "aktif") {
                  return (
                    <td key={header + innerIndex} className="mt-1 py-3">
                      <label>
                        <Switch
                          onColor="#34C369"
                          checked={true}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onChange={(e) => console.log("fired")}
                        />
                      </label>
                      {/* <Badge pill style={{ backgroundColor: "#F2F2F2", color: "#34C369" }} color="secondary">
                        {data[header]}
                      </Badge> */}
                      {/* <p>
                      </p> */}
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
                              src={check}
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

                        if (action.toLowerCase() === "detail") {
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

export default CustomTable;
