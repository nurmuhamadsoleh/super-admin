import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const dummyData = [
    {
        id: 1,
        rw: "001",
        jumlah: "894 jiwa",
        persentase: "5.96%",
    },
    {
        id: 2,
        rw: "002",
        jumlah: "894 jiwa",
        persentase: "5.96%",
    },
    {
        id: 3,
        rw: "003",
        jumlah: "894 jiwa",
        persentase: "5.96%",
    },
    {
        id: 4,
        rw: "004",
        jumlah: "894 jiwa",
        persentase: "5.96%",
    },
    {
        id: 5,
        rw: "005",
        jumlah: "894 jiwa",
        persentase: "5.96%",
    },
];
const GrafikRtRw = () => {
    const [response, setResponse] = useState(dummyData);
    // const [responseBackup, setResponseBackup] = useState([]);
    const [changeText, setChangeText] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [pagination, setPagination] = useState(true);
    const [pageSize, setPageSize] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    console.log(setResponse, setPagination, setIsLoading);
    const pagesCount = Math.ceil(response.length / pageSize);

    const handleClick = (event, index) => {
        event.preventDefault();
        setCurrentPage(index);
        // console.log(`Viewing Page ${index + 1} Data`);
    };

    const sortByIdAsc = () => {
        response.sort((a, b) => a.id - b.id);
    };
    const sortByIdDesc = () => {
        response.sort((a, b) => a.id - b.id).reverse();
    };

    const handleChangeText = () => {
        setChangeText(!changeText);
        if (changeText === true) {
            sortByIdAsc();
            // console.log("Table sorted using Id in Ascending oder");
        } else {
            sortByIdDesc();
            // console.log("Table sorted using Id in Descending oder");
        }
    };
    const pageSizePagination = () => {
        return (
            <div className="d-flex pagesize">
                <p className="me-2 d-none d-md-block">Show</p>
                <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                    {[10, 20, 50].map((pageSize) => {
                        return (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        );
                    })}
                </select>
                <p className="ms-2 d-none d-md-block">Entries</p>
            </div>
        );
    };
    return (
        <div className="grafik-rt-rw">
            <div className="header">
                <div className="card shadow">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-start mt-4 mb-4">
                            <b>Data RT-RW</b>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body card mt-5 mb-5">
                <div className="table-area">
                    <div className="table-surat-keterangan-domisili-non-warga-page">
                        <div>
                            <div className="container-fluid p-3">
                                <div className="d-none d-md-flex justify-content-between">
                                    {pageSizePagination()}
                                    <div className="d-block d-md-flex">
                                        <div className="mt-1 mb-3 mb-md-0 d-flex">
                                            <div>Search: </div>

                                            <input
                                                type="text"
                                                placeholder="Filter"
                                                // onChange={filterList}
                                                className="form-control ms-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex d-md-none justify-content-between">
                                    <div className="d-block d-md-flex">
                                        <div className="mt-1 mb-3 mb-md-0">
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                // onChange={filterList}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isLoading ? (
                                <div className="text-center mx-auto" style={{ width: 400 }}>
                                    <div className="spinner-grow text-success" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="table-responsive">
                                    <table id="zero_config" className="table  no-wrap  ">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div
                                                        className="d-md-flex justify-content-between"
                                                        onClick={(e) => handleChangeText(e)}
                                                    >
                                                        <div>RW</div>

                                                        <div className="d-none d-md-block">
                                                            <div style={{ fontSize: "10px" }}>
                                                                <i
                                                                    className={
                                                                        changeText
                                                                            ? "fas fa-chevron-up"
                                                                            : "fas fa-chevron-up text-secondary"
                                                                    }
                                                                ></i>
                                                                <br />
                                                                <i
                                                                    class={
                                                                        changeText
                                                                            ? "fas fa-chevron-down text-secondary"
                                                                            : "fas fa-chevron-down"
                                                                    }
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>

                                                <th onClick={(e) => handleChangeText(e)}>
                                                    {" "}
                                                    <div className="d-flex justify-content-between ">
                                                        <div>Jumlah</div>

                                                        <div
                                                            className="d-none d-md-block"
                                                            onClick={(e) => handleChangeText(e)}
                                                        >
                                                            <div style={{ fontSize: "10px" }}>
                                                                <i
                                                                    className={
                                                                        changeText
                                                                            ? "fas fa-chevron-up"
                                                                            : "fas fa-chevron-up text-secondary"
                                                                    }
                                                                ></i>
                                                                <br />
                                                                <i
                                                                    class={
                                                                        changeText
                                                                            ? "fas fa-chevron-down text-secondary"
                                                                            : "fas fa-chevron-down"
                                                                    }
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th onClick={(e) => handleChangeText(e)}>
                                                    {" "}
                                                    <div className="d-flex justify-content-between ">
                                                        <div>Persentase</div>

                                                        <div
                                                            className="d-none d-md-block"
                                                            onClick={(e) => handleChangeText(e)}
                                                        >
                                                            <div style={{ fontSize: "10px" }}>
                                                                <i
                                                                    className={
                                                                        changeText
                                                                            ? "fas fa-chevron-up"
                                                                            : "fas fa-chevron-up text-secondary"
                                                                    }
                                                                ></i>
                                                                <br />
                                                                <i
                                                                    class={
                                                                        changeText
                                                                            ? "fas fa-chevron-down text-secondary"
                                                                            : "fas fa-chevron-down"
                                                                    }
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th  className="pb-3">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {response.length !== 0 ? (
                                                response
                                                    .slice(
                                                        currentPage * pageSize,
                                                        (currentPage + 1) * pageSize
                                                    )
                                                    .map((data, i) => {
                                                        let number = i + 1;
                                                        return (
                                                            <tr key={data.id}>
                                                                <td className="">{data?.rw}</td>
                                                                <td className="">{data?.jumlah}</td>
                                                                <td className="">{data?.persentase}</td>
                                                                <td className="d-flex justify-content-center">
                                                                    <button className="btn btn-outline-warning">
                                                                        <i class="fas fa-sliders-h"></i>
                                                                        <span className="ms-2">Detail</span>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                            ) : (
                                                <tr className="odd">
                                                    <td
                                                        colspan="5"
                                                        className="dataTables_empty text-center"
                                                        valign="top"
                                                    >
                                                        No data available in table
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>

                        <div className="  d-flex justify-content-end justify-content-md-between container-fluid mt-3 mt-md-0">
                            <div className="d-none d-md-block">
                                <p className="text-muted">
                                    Showing {pageSize} of {response.length} entries
                                </p>
                            </div>
                            <div>
                                {pagination && (
                                    <Pagination>
                                        <PaginationItem disabled={currentPage <= 0}>
                                            <PaginationLink
                                                className="prev-next-buttons"
                                                onClick={(e) => handleClick(e, currentPage - 1)}
                                                href="#"
                                            >
                                                <i class="fas fa-chevron-left"></i>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <div className="d-flex pagination-wrap pr-1 pl-1 mr-2 ml-2">
                                            {[...Array(pagesCount)].map((currentPageno, i) => (
                                                <PaginationItem
                                                    active={i === currentPage}
                                                    key={i}
                                                    className="outline-0"
                                                >
                                                    <PaginationLink
                                                        className="page-numbers border-0 outline-0"
                                                        onClick={(e) => handleClick(e, i)}
                                                        href="#"
                                                    >
                                                        <div>{i + 1}</div>
                                                    </PaginationLink>
                                                </PaginationItem>
                                            ))}
                                        </div>

                                        <PaginationItem disabled={currentPage >= pagesCount - 1}>
                                            <PaginationLink
                                                className="prev-next-buttons"
                                                // onClick={(e) => handleClick(e, currentPage + 1)}
                                                href="#"
                                            >
                                                <i class="fas fa-chevron-right"></i>
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrafikRtRw;
