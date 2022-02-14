import {
  BpdDashboardPage,
  InformasiDesaPage,
  TambahInformasiDesa,
  BpdBeritaPage,
  BpdAddNews,
  BpdUpdateNewsPage,
  BpdForumPage,
  GrafikAgama,
  GrafikDisabilitas,
  GrafikGolonganDarah,
  GrafikJenisKelamin,
  GrafikKewarganegaraan,
  GrafikPekerjaan,
  GrafikPendidikan,
  GrafikRtRw,
  GrafikStatusPerkawinan,
  GrafikUsia,
} from "../pages";

/*
Grafik & forum pages still using dummy template from admin-desa page
*/

export const routes = [
  {
    layout: "/bpd",
    path: "/dashboard",
    component: BpdDashboardPage,
  },
  {
    layout: "/bpd",
    path: "/informasi-desa",
    component: InformasiDesaPage,
  },
  {
    layout: "/bpd",
    path: "/informasi-desa/add",
    component: TambahInformasiDesa,
  },
  {
    path: "/berita",
    component: BpdBeritaPage,
    name: "berita",
    layout: "/bpd",
  },
  {
    path: "/berita/add",
    component: BpdAddNews,
    name: "berita",
    layout: "/bpd",
  },
  {
    path: "/berita/update/:id",
    component: BpdUpdateNewsPage,
    name: "berita",
    layout: "/bpd",
  },
  {
    layout: "/bpd",
    path: "/pendidikan",
    component: GrafikPendidikan,
  },
  {
    layout: "/bpd",
    path: "/rt-rw",
    component: GrafikRtRw,
  },
  {
    layout: "/bpd",
    path: "/status-perkawinan",
    component: GrafikStatusPerkawinan,
  },
  {
    layout: "/bpd",
    path: "/grafik-usia",
    component: GrafikUsia,
  },
  {
    layout: "/bpd",
    path: "/pekerjaan",
    component: GrafikPekerjaan,
  },
  {
    layout: "/bpd",
    path: "/kewarganegaraan",
    component: GrafikKewarganegaraan,
  },
  {
    layout: "/bpd",
    path: "/jenis-kelamin",
    component: GrafikJenisKelamin,
  },
  {
    layout: "/bpd",
    path: "/golongan-darah",
    component: GrafikGolonganDarah,
  },
  {
    layout: "/bpd",
    path: "/disabilitas",
    component: GrafikDisabilitas,
  },
  {
    layout: "/bpd",
    path: "/agama",
    component: GrafikAgama,
  },
  {
    layout: "/bpd",
    path: "/forum-masyarakat",
    component: BpdForumPage,
  },
];
