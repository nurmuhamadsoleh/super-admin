import { useState } from "react";
import { Table, Button } from "reactstrap";

// headerList = # (id),PESANAN,WAKTU,PELANGGAN, STATUS PEMBAYARAN, TOTAL, STATUS PESANAN, TIPE PESANAN, AKSI

const UMKMPromoTable = ({
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
  borderless = true,
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
    <Table
      borderless={borderless}
      className={`overflow-auto ${className}`}
      bordered={bordered}
      hover
      responsive
      striped={striped}
    >
      <thead style={{ borderStyle: "hidden" }} className="text-center">
        <tr>
          {headers.map((header, idx) => {
            if (header === "_id") {
              return <th key={idx}></th>;
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
            <tr key={index} className="py-3" style={{ backgroundColor: "#FBFBFB" }}>
              {Object.keys(data).map((header, innerIndex) => {
                if (header === "_id") {
                  return null;
                }

                if (header.toLowerCase() === "gambar") {
                  return (
                    <td key={header + innerIndex} className="py-3">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={data.GAMBAR}
                          alt=""
                          style={{ height: "75px", width: "200px" }}
                          className="rounded-3"
                        />
                      </div>
                    </td>
                  );
                }

                if (header.toLowerCase() === "status") {
                  return (
                    <td>
                      <Button color="outline-danger">Keluar</Button>
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

export default UMKMPromoTable;
