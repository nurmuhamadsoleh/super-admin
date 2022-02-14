import React, { useState } from "react";
import MitraBumdesHeader from "./mitra-bumdes-header";
import { Line, Chart } from "react-chartjs-2";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: "#C2FBFF",
            borderColor: "#C2FBFF",
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const MitraBumdes = () => {
    const [response, setResponse] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [pagination, setPagination] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [changeText, setChangeText] = useState(false);

    const pagesCount = Math.ceil(response.length / pageSize);

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
        <div className="mitra-bumdes">
            <div className="header-main">
                <div className="card shadow bg-white">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between mt-3 mb-3">
                            <h5>Grafik Mitra Bumdes</h5>

                            <div className="d-none d-md-flex d-lg-flex">
                                <input type="date" className="form-control" />
                                <input type="date" className="form-control ms-2" />
                            </div>

                            <div className="d-block d-md-none d-lg-none">
                                <input type="date" className="form-control" />
                                <input type="date" className="form-control mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <MitraBumdesHeader />
            </>

            <div className="chart-body mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow">
                            <div className="container-fluid">
                                <div className="d-flex justify-content-between mt-3">
                                    <h5>Grafik Laporan</h5>
                                    <button className="btn btn-primary">
                                        <i class="fas fa-filter"></i>
                                        <span>Filter</span>
                                    </button>
                                </div>

                                <div className="d-flex justify-content-center mt-3">
                                    <p>Jumlah Transaksi Mitra BUMDes</p>
                                </div>
                                <div className="chart-line container" style={{ width: "90%" }}>
                                    <Line data={data} options={options} />
                                </div>

                                <div className="bumdes-table mt-4">
                                    <div className="table-header">
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

                                    <div className="table-body mt-3">
                                        {isLoading ? (
                                            <div
                                                className="text-center mx-auto"
                                                style={{ width: 400 }}
                                            >
                                                <div
                                                    className="spinner-grow text-success"
                                                    role="status"
                                                >
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="table-responsive">
                                                <table id="zero_config" className="table  no-wrap  ">
                                                    <thead>
                                                        <tr>
                                                            <th className="pl-5">
                                                                <div>
                                                                    <div className="pb-0 pb-md-2">No</div>
                                                                </div>
                                                            </th>
                                                            <th>
                                                                <div
                                                                    className="d-md-flex justify-content-between"
                                                                //   onClick={(e) => handleChangeText(e)}
                                                                >
                                                                    <div>Nama Mitra</div>

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
                                                            <th
                                                            //   onClick={(e) => handleChangeText(e)}
                                                            >
                                                                {" "}
                                                                <div className="d-flex justify-content-between ">
                                                                    <div>NIK</div>

                                                                    <div
                                                                        className="d-none d-md-block"
                                                                    //   onClick={(e) => handleChangeText(e)}
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
                                                            <th
                                                            //   onClick={(e) => handleChangeText(e)}
                                                            >
                                                                {" "}
                                                                <div className="d-flex justify-content-between ">
                                                                    <div>No. HP</div>

                                                                    <div
                                                                        className="d-none d-md-block"
                                                                    //   onClick={(e) => handleChangeText(e)}
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

                                                            <th
                                                            //   onClick={(e) => handleChangeText(e)}
                                                            >
                                                                {" "}
                                                                <div className="d-flex justify-content-between ">
                                                                    <div>Jumlah Transaksi</div>

                                                                    <div
                                                                        className="d-none d-md-block"
                                                                    //   onClick={(e) => handleChangeText(e)}
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
                                                            <th style={{ width: "100px" }}>
                                                                <div className="pb-0 pb-md-2">Aksi</div>
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
                                                                            <td className="pl-5">{number++}</td>
                                                                            <td className="">{data?.company_name}</td>
                                                                            <td className="">{data?.owner_name}</td>
                                                                            <td className="">{data?.package_name}</td>
                                                                            <td className="">{data?.package_name}</td>
                                                                            <td className="d-flex">
                                                                                <div
                                                                                    className="btn btn-sm"
                                                                                    title="Edit"
                                                                                //   onClick={() => handleEditMode(data.UUID)}
                                                                                >
                                                                                    <i class="fas fa-pencil-alt text-success"></i>
                                                                                </div>
                                                                                <div
                                                                                    className="btn btn-sm"
                                                                                    title="Delete"
                                                                                //   onClick={() => handleDelete(data.UUID)}
                                                                                // style={{ margin: '3px' }}
                                                                                >
                                                                                    <i class="far fa-trash-alt text-danger"></i>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                })
                                                        ) : (
                                                            <tr className="odd">
                                                                <td
                                                                    colspan="6"
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
                                                            // onClick={(e) => handleClick(e, currentPage - 1)}
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
                                                                    // onClick={(e) => handleClick(e, i)}
                                                                    href="#"
                                                                >
                                                                    <div>{i + 1}</div>
                                                                </PaginationLink>
                                                            </PaginationItem>
                                                        ))}
                                                    </div>

                                                    <PaginationItem
                                                        disabled={currentPage >= pagesCount - 1}
                                                    >
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
                </div>
            </div>
        </div>
    );
};

export default MitraBumdes;
