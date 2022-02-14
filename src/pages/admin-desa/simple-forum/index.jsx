import React, { useState } from "react";
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    Card,
    Button,
    CardTitle,
    CardText,
    NavLink,
    Row,
    Col,
} from "reactstrap";
import classNames from "classnames";
import ForumPage from "./forum-page"
import FavoritePage from "./favorite-page";
import MyThreadPage from "./my-thread-page"
import TulisThreadPage from "./tulis-thread-page"
import LaporanPage from "./laporan-page";

const SimpleForum = () => {
    const [activeTab, setActiveTab] = useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <div className="simple-forum">
            <div className="header-forum">
                <div className="d-flex justify-content-between">
                    <div className="title-page">
                        <div className="d-flex">
                            <div className="icon-page">
                                <div className="card shadow d-none d-md-none d-lg-block ">
                                    <div className="p-3">
                                        <i class="far fa-comment-dots"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="title ms-2">
                                <h5 className="font-weight-bold">Simple Forum</h5>
                                <p>Forum</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-button d-none d-md-none d-lg-block">
                        <button
                            className={classNames(
                                activeTab === "1"
                                    ? "active btn btn-dark btn-sm"
                                    : "btn btn-primary btn-sm"
                            )}
                            onClick={() => {
                                toggle("1");
                            }}
                        >
                            <i class="fas fa-plus me-2"></i>
                            <span>Tulis Thread</span>
                        </button>
                        <button className={classNames(
                            activeTab === "2"
                                ? "active btn btn-dark btn-sm ms-2"
                                : "btn btn-primary btn-sm ms-2"
                        )}
                            onClick={() => {
                                toggle("2");
                            }}>
                            <i class="far fa-comment-dots me-2"></i>
                            <span>My Thread</span>
                        </button>
                        <button className={classNames(
                            activeTab === "3"
                                ? "active btn btn-dark btn-sm ms-2"
                                : "btn btn-primary btn-sm ms-2"
                        )}
                            onClick={() => {
                                toggle("3");
                            }}>
                            <i class="far fa-comments me-2"></i>
                            <span>Forum</span>
                        </button>
                        <button className={classNames(
                            activeTab === "4"
                                ? "active btn btn-dark btn-sm ms-2"
                                : "btn btn-primary btn-sm ms-2"
                        )}
                            onClick={() => {
                                toggle("4");
                            }}>
                            <i class="far fa-bookmark me-2"></i>
                            <span>Favorit</span>
                        </button>
                        <button className={classNames(
                            activeTab === "5"
                                ? "active btn btn-dark btn-sm ms-2"
                                : "btn btn-primary btn-sm ms-2"
                        )}
                            onClick={() => {
                                toggle("5");
                            }}>
                            <i class="fas fa-info me-2"></i>
                            <span>Laporan</span>
                        </button>
                    </div>
                </div>

                <div className="filtering">
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark">
                            <i class="fas fa-filter me-2"></i>
                            <span>Filter</span>
                        </button>
                        <div className="d-flex">
                            <label htmlFor="filter-input">Cari</label>
                            <input type="text" id="filter-input" className="me-2 ms-2" />
                            <button className="btn btn-primary">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tab-button d-block d-md-block d-lg-none mt-5">
                        <button
                            className={classNames(
                                activeTab === "1"
                                    ? "active btn btn-dark btn-sm mt-2"
                                    : "btn btn-primary btn-sm mt-2"
                            )}
                            onClick={() => {
                                toggle("1");
                            }}
                        >
                            <i class="fas fa-plus me-2"></i>
                            <span>Tulis Thread</span>
                        </button>
                        <button className={classNames(
                            activeTab === "2"
                                ? "active btn btn-dark btn-sm ms-2 mt-2"
                                : "btn btn-primary btn-sm ms-2 mt-2"
                        )}
                            onClick={() => {
                                toggle("2");
                            }}>
                            <i class="far fa-comment-dots me-2"></i>
                            <span>My Thread</span>
                        </button>
                        <button className={classNames(
                            activeTab === "3"
                                ? "active btn btn-dark btn-sm ms-2 mt-2"
                                : "btn btn-primary btn-sm ms-2 mt-2"
                        )}
                            onClick={() => {
                                toggle("3");
                            }}>
                            <i class="far fa-comments me-2"></i>
                            <span>Forum</span>
                        </button>
                        <button className={classNames(
                            activeTab === "4"
                                ? "active btn btn-dark btn-sm ms-0 mt-2  ms-md-2"
                                : "btn btn-primary btn-sm ms-0 mt-2  ms-md-2"
                        )}
                            onClick={() => {
                                toggle("4");
                            }}>
                            <i class="far fa-bookmark me-2"></i>
                            <span>Favorit</span>
                        </button>
                        <button className={classNames(
                            activeTab === "5"
                                ? "active btn btn-dark btn-sm ms-2 mt-2 "
                                : "btn btn-primary btn-sm ms-2 mt-2 "
                        )}
                            onClick={() => {
                                toggle("5");
                            }}>
                            <i class="fas fa-info me-2"></i>
                            <span>Laporan</span>
                        </button>
                    </div>
                <div className="form-body mt-5">
                    <TabContent activeTab={activeTab} >
                        <TabPane tabId="1">
                            <div
                                className="card shadow-lg"
                            // style={{width: '745px', height: ''}}
                            >
                                <TulisThreadPage/>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div
                                className="card shadow-lg"
                            // style={{width: '745px', height: ''}}
                            >
                                <MyThreadPage/>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div
                                className="card shadow-lg"
                            // style={{width: '745px', height: ''}}
                            >
                                <ForumPage />
                            </div>
                        </TabPane>
                        <TabPane tabId="4">
                            <div
                                className="card shadow-lg"
                            // style={{width: '745px', height: ''}}
                            >
                                <FavoritePage />
                            </div>
                        </TabPane>
                        <TabPane tabId="5">
                            <div
                                className="card shadow-lg"
                            // style={{width: '745px', height: ''}}
                            >
                                <LaporanPage />
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    );
};
export default SimpleForum;
