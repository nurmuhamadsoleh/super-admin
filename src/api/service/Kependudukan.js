import EDESA_API from "../index";

const fetchAll = () => {
  return EDESA_API.get("/api/admin_desa/data_warga/penduduk");
};
const createNewKependudukan = (payload) => {
  return EDESA_API.post("/api/admin_desa/data_warga/penduduk/", payload);
};
const editKependudukan = (payload, id) => {
  return EDESA_API.put(`/api/admin_desa/data_warga/penduduk/${id}`, payload);
};

const getAllPenduduk = (pageSize = 5, pageNumber = 0) => {
  return EDESA_API.get(`/api/admin_desa/data_warga/penduduk?size=${pageSize}&page=${pageNumber}`);
};

const getOnePenduduk = (id) => {
  return EDESA_API.get(`/api/admin_desa/data_warga/penduduk/${id}`);
};

export { fetchAll, createNewKependudukan, editKependudukan, getOnePenduduk, getAllPenduduk };
