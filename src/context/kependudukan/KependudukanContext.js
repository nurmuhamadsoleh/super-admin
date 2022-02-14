import { createContext, useReducer } from "react";
import * as Kependudukan from "../../api/service/Kependudukan";
import Swal from "sweetalert2";
export const KependudukanContext = createContext();

const INITIAL_STATE = {
  dataKependudukanList: [
    {
      id: 0,
      nik: 0,
      no_kk: 0,
      profil_penduduk: {
        foto: "",
        nama: "",
        agama: "",
        email: "",
        alamat: "",
        no_telpon: "",
        status_warga: "",
        tempat_lahir: "",
        jenis_kelamin: "",
        tanggal_lahir: "",
        akte_kelahiran: false,
        status_keluarga: "",
      },
    },
  ],
  dataKependudukanSingle: {},
  nextForm: false,
};

const kependudukanReducer = (kependudukanState, action) => {
  switch (action.type) {
    case "SET_KEPENDUDUKAN_DATA": {
      return { ...kependudukanState, dataKependudukanList: action.payload };
    }
    case "SET_NEXT_FORM": {
      return { ...kependudukanState, nextForm: action.payload };
    }

    case "SET_ONE_KEPENDUDUKAN": {
      return { ...kependudukanState, dataKependudukanSingle: action.payload };
    }

    default: {
      return kependudukanState;
    }
  }
};

const KependudukanContextProvider = ({ children }) => {
  const [kependudukanState, dispatch] = useReducer(kependudukanReducer, INITIAL_STATE);

  const fetchAllKependudukan = async () => {
    try {
      let {
        data: { result = [] },
      } = await Kependudukan.fetchAll();
      dispatch({
        type: "SET_KEPENDUDUKAN_DATA",
        payload: result,
      });
    } catch (error) {
      console.log(error);
      // throw error;
    }
  };

  const getAllPenduduk = async (pageSize, pageNumber) => {
    try {
      let {
        data: { result = [] },
      } = await Kependudukan.getAllPenduduk(pageSize, pageNumber);
      dispatch({
        type: "SET_KEPENDUDUKAN_DATA",
        payload: result,
      });
    } catch (e) {}
  };

  const postNewKependudukan = async (payload) => {
    try {
      let response = await Kependudukan.createNewKependudukan(payload);

      console.log(response);
      dispatch({
        type: "SET_NEXT_FORM",
        payload: true,
      });
      localStorage.setItem("kependudukanId", response.data.id);
      Swal.fire("", "Sukses menambahkan data kependudukan", `${response.status === 200 ? "success" : "error"}`);
    } catch (error) {
      dispatch({
        type: "SET_NEXT_FORM",
        payload: false,
      });
      Swal.fire("", "Internal Server Error", "error");
      throw error;
    }
  };

  const editKependudukan = async (payload, id) => {
    try {
      let response = await Kependudukan.editKependudukan(payload, id);
      Swal.fire("", response.data.message, `${response.status === 200 ? "success" : "error"}`);
    } catch (error) {
      Swal.fire("", error.message, "error");
    }
  };

  const setNextForm = (state) => {
    dispatch({
      type: "SET_NEXT_FORM",
      payload: state,
    });
  };

  const getOnePenduduk = async (id) => {
    let { data } = await Kependudukan.getOnePenduduk(id);
    dispatch({
      type: "SET_ONE_KEPENDUDUKAN",
      payload: data,
    });
  };

  return (
    <KependudukanContext.Provider
      value={{
        kependudukanState,
        fetchAllKependudukan,
        getAllPenduduk,
        getOnePenduduk,
        postNewKependudukan,
        editKependudukan,
        setNextForm,
      }}
    >
      {children}
    </KependudukanContext.Provider>
  );
};

export default KependudukanContextProvider;
