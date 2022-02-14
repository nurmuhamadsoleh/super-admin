import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { SubTitle } from "../../../../components";
import { Input } from "reactstrap";
import { Link as RouterLink } from "react-router-dom";

const data = [
    {
        id: 1,
        kategori: "PPOB",
        nama_desa: "Desa Babakan Ciparay",
        aplikator: 30,
        kepala_desa: 30,
        bumdes: 40,
    },
    {
        id: 2,
        kategori: "Transaksi Idesaku",
        nama_desa: "Desa Mekar Jaya",
        aplikator: 30,
        kepala_desa: 30,
        bumdes: 40,
    },
];

const PembagianPage = (props) => {
    const [response, setResponse] = useState(data);
    const [responseBackup, setResponseBackup] = useState(data);
    const [changeText, setChangeText] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [pagination, setPagination] = useState(true);
    const [pageSize, setPageSize] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [newsTitle, setNewsTitle] = useState("");

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

    const onChangeTitle = ({ target }) => {
        setNewsTitle(target.value);
    };

    const goToAddPpobPage = () => {
        props.history.push("/super-admin/pembagian/add");
    }
    return (
        <div className="pembagian-page">
            <div className="card bg-white shadow-lg">
                <div className="card-body">
                    <div className="d-flex justify-content-between ">
                        <h6 className="mt-2">Pembagian Keuntungan</h6>
                        <button className="btn btn-primary" onClick={goToAddPpobPage}>
                            <span>
                                <i class="fas fa-plus me-2"></i>
                            </span>
                            Tambah
                        </button>
                    </div>
                </div>
            </div>
            <div className="card bg-white mt-3">
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
                                    <th className="pl-5">
                                        <div>
                                            <div className="pb-0 pb-md-2">NO</div>
                                        </div>
                                    </th>

                                    <th>
                                        <div
                                            className="d-md-flex justify-content-between"
                                            onClick={(e) => handleChangeText(e)}
                                        >
                                            <div>KATEGORI TRANSAKSI</div>

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
                                            <div>NAMA DESA</div>

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
                                            <div>APLIKATOR</div>

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
                                            <div>KEPALA DESA</div>

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
                                            <div>BUMDES</div>

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

                                    <th style={{ width: "100px" }} className="pb-3">
                                        AKSI
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {response.length !== 0 ? (
                                    response
                                        .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                                        .map((data, i) => {
                                            return (
                                                <tr key={data.id}>
                                                    <td className="">{i + 1}</td>
                                                    <td className="">{data?.kategori}</td>
                                                    <td className="">{data?.nama_desa}</td>
                                                    <td className="">{data?.aplikator}</td>
                                                    <td className="">{data?.kepala_desa}</td>
                                                    <td className="">{data?.bumdes}</td>

                                                    <td className="d-flex">
                                                        <RouterLink
                                                            className="btn btn-sm"
                                                            title="Edit"
                                                            to={{
                                                                pathname: `/super-admin/pembagian/edit/${data.id}`,
                                                                state: {
                                                                    data: data,
                                                                },
                                                            }}


                                                        >
                                                            <i class="fas fa-pencil-alt text-success"></i>
                                                        </RouterLink>
                                                        <div
                                                            className="btn btn-sm"
                                                            title="Delete"
                                                        // onClick={() => handleDelete(data.UUID)}
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
                                            colspan="9"
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
    );
};

export default PembagianPage;
