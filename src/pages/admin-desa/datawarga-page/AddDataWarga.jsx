import { useEffect, useState, useContext } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import classnames from "classnames";
import Swal from "sweetalert2";

import { KependudukanContext } from "../../../context/kependudukan/KependudukanContext";
import CitizenshipForm from "./CitizenshipForm";
import CriminalityForm from "./CriminalityForm";
import EducationForm from "./EducationForm";
import HealthForm from "./HealthForm";
import InactiveForm from "./InactiveForm";
import JobAndInstitutionForm from "./JobAndInstitutionForm";
import OwnershipForm from "./ownership-form";
import ProgramMembershipForm from "./ProgramMembershipForm";
import "./style.css";
const SUB_HEADER = [
  { name: "Kependudukan" },
  { name: "Pendidikan" },
  { name: "Pekerjaan & Lembaga" },
  { name: "Kesehatan" },
  { name: "Kepersertaan Program" },
  { name: "Kriminalitas" },
  { name: "Kepemilikian" },
  { name: "Data Non-aktif" },
];

const AddDataWarga = () => {
  const { kependudukanState, postNewKependudukan, getOnePenduduk } = useContext(KependudukanContext);
  const { id } = useParams();
  useEffect(() => {
    if (kependudukanState.nextForm) {
      setIsTabPaneDisable(false);
    } else {
      setIsTabPaneDisable(true);
    }
  }, [kependudukanState]);

  useEffect(() => {
    if (!id) return;

    getOnePenduduk(id);
  }, [id]);

  const [activeTab, setActiveTab] = useState(1);
  const [isTabPaneDisable, setIsTabPaneDisable] = useState(true);
  const [inputJobInstitutionForm, setInputJobInstitutionForm] = useState({});
  const [inputHealthForm, setInputHealthForm] = useState({});

  const [inputProgramMembership, setInputProgramMembership] = useState({});

  const onSubmitCitizenshipForm = (data) => {
    for (const key in data) {
      if (data[key] === "true") {
        data[key] = true;
      }
      if (data[key] === "false") {
        data[key] = false;
      }

      if (parseInt(data[key])) {
        data[key] = parseInt(data[key]);
      }
    }
    let { nik, no_kk } = data;
    const desaId = JSON.parse(localStorage.getItem("userProfile")).desa_id;
    const kependudukanData = { desa_id: parseInt(desaId), nik, no_kk, profil_penduduk: { ...data } };
    console.log("modifiedData: ", kependudukanData);
    postNewKependudukan(kependudukanData);
    if (localStorage.getItem("kependudukanId")) {
      setIsTabPaneDisable(false);
    }
  };

  const onChangeInputJobInstitutionForm = ({ target }) => {
    setInputJobInstitutionForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmitJobInstitution = () => {
    console.log("inputJobInstitutionForm: ", inputJobInstitutionForm);
  };

  const onChangeHealthForm = ({ target }) => {
    setInputHealthForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmitHealthForm = () => {
    console.log("inputHealthForm: ", inputHealthForm);
  };

  const onChangeProgramMembership = ({ target }) => {
    setInputProgramMembership((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const onSubmitProgramMembership = () => {
    console.log("inputProgramMembership: ", inputProgramMembership);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleTabPane = (index) => {
    if (isTabPaneDisable) {
      return Swal.fire("", "Harap isi data kependudukan terlebih dahulu", "error");
    } else {
      toggle(index + 1);
    }
  };

  const renderNav = () => {
    return SUB_HEADER.map((item, index) => {
      let { name } = item;
      return (
        <NavItem key={name} className={`w-100 ${!isTabPaneDisable ? "active-tabpane" : "disabled-tabpane"}`}>
          <NavLink
            style={{ fontSize: "14px" }}
            className={classnames(
              "p-4 h-100 text-center align-middle m-0 w-100 navlink-custom",
              {
                active: activeTab === index + 1,
              },
              { "active-navlink-custom": activeTab === index + 1 }
            )}
            onClick={() => {
              toggleTabPane(index);
            }}
          >
            {name}
          </NavLink>
        </NavItem>
      );
    });
  };

  return (
    <div className="w-100">
      <Nav
        tabs
        className="w-100 d-flex flex-row flex-nowrap overflow-scroll"
        style={{ boxShadow: "0px 4px 4px 0px #00000040", borderRadius: "10px" }}
      >
        {renderNav()}
      </Nav>

      <TabContent activeTab={activeTab} className="mt-4">
        <TabPane tabId={1}>
          <CitizenshipForm onSubmitCitizenshipForm={onSubmitCitizenshipForm} />
        </TabPane>
        <TabPane tabId={2}>
          <EducationForm />
        </TabPane>
        <TabPane tabId={3}>
          <JobAndInstitutionForm
            onChangeInputJobInstitutionForm={onChangeInputJobInstitutionForm}
            onSubmitJobInstitution={onSubmitJobInstitution}
          />
        </TabPane>
        <TabPane tabId={4}>
          <HealthForm onChange={onChangeHealthForm} onSubmit={onSubmitHealthForm} />
        </TabPane>
        <TabPane tabId={5}>
          <ProgramMembershipForm
            onChangeProgramMembership={onChangeProgramMembership}
            onSubmitProgramMembership={onSubmitProgramMembership}
          />
        </TabPane>
        <TabPane tabId={6}>
          <CriminalityForm />
        </TabPane>
        <TabPane tabId={7}>
          <OwnershipForm />
        </TabPane>
        <TabPane tabId={8}>
          <InactiveForm />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default AddDataWarga;
