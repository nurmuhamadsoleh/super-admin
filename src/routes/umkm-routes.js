import {
  InvestmentUMKM,
  PenarikanInvestasiUMKM,
  UMKMBulkExport,
  UMKMBulkImport,
  UMKMDaftarKaryawanPage,
  UMKMDaftarProdukPage,
  UMKMDashboardPage,
  UMKMKategoriPage,
  UMKMKonfigurasiPage,
  UMKMPesananDalamPengantaran,
  UMKMPesananSemua,
  UMKMPesananTerkirim,
  UMKMPesananTerkonfirmasi,
  UMKMPesananTertunda,
  UMKMProdukTambahBaruPage,
  UMKMPromoPage,
  UMKMSubkategoriPage,
  UMKMTambahKaryawanPage,
} from "../pages";

export const routes = [
  {
    layout: "/umkm",
    path: "/dashboard",
    component: UMKMDashboardPage,
    name: "Dashboard",
  },

  //? Pesanan routes
  {
    layout: "/umkm",
    path: "/pesanan-tertunda",
    component: UMKMPesananTertunda,
    name: "Pesanan Tertunda",
  },
  {
    layout: "/umkm",
    path: "/pesanan-terkonfirmasi",
    component: UMKMPesananTerkonfirmasi,
    name: "Pesanan Terkonfirmasi",
  },
  {
    layout: "/umkm",
    path: "/pesanan-dalam-pengantaran",
    component: UMKMPesananDalamPengantaran,
    name: "Pesanan Dalam Pengantaran",
  },
  {
    layout: "/umkm",
    path: "/pesanan-terkirim",
    component: UMKMPesananTerkirim,
    name: "Pesanan Terkirim",
  },
  {
    layout: "/umkm",
    path: "/pesanan-semua",
    component: UMKMPesananSemua,
    name: "Pesanan Semua",
  },

  //? Produk routes
  {
    layout: "/umkm",
    path: "/produk-tambah-baru",
    component: UMKMProdukTambahBaruPage,
    name: "Produk Tambah Baru",
  },
  {
    layout: "/umkm",
    path: "/produk-daftar",
    component: UMKMDaftarProdukPage,
    name: "Produk Daftar",
  },
  {
    layout: "/umkm",
    path: "/produk-bulk-import",
    component: UMKMBulkImport,
    name: "Produk Bulk Import",
  },
  {
    layout: "/umkm",
    path: "/produk-bulk-export",
    component: UMKMBulkExport,
    name: "Produk Bulk Export",
  },

  //? Kategori routes
  {
    layout: "/umkm",
    path: "/kategori",
    component: UMKMKategoriPage,
    name: "Kategori",
  },
  {
    layout: "/umkm",
    path: "/subkategori",
    component: UMKMSubkategoriPage,
    name: "Subkategori",
  },

  //? Investasi routes
  {
    layout: "/umkm",
    path: "/investment",
    component: InvestmentUMKM,
    name: "Investment",
  },
  {
    layout: "/umkm",
    path: "/investment-penarikan",
    component: PenarikanInvestasiUMKM,
    name: "Penarikan",
  },

  //? karyawan routes
  {
    layout: "/umkm",
    path: "/karyawan-tambah-baru",
    component: UMKMTambahKaryawanPage,
    name: "Karyawan Tambah Baru",
  },
  {
    layout: "/umkm",
    path: "/karyawan-daftar",
    component: UMKMDaftarKaryawanPage,
    name: "Karyawan Daftar",
  },

  //? Routes with no subitems
  {
    layout: "/umkm",
    path: "/promo",
    component: UMKMPromoPage,
    name: "Promo",
  },
  {
    layout: "/umkm",
    path: "/konfigurasi",
    component: UMKMKonfigurasiPage,
    name: "Konfigurasi",
  },
  {
    layout: "/umkm",
    path: "/info-restoran",
    component: () => <h1>Sedang dalam pengembangan</h1>,
    name: "Info Restoran",
  },
  {
    layout: "/umkm",
    path: "/informasi-bank",
    component: () => <h1>Sedang dalam pengembangan</h1>,
    name: "Informasi Bank",
  },
  {
    layout: "/umkm",
    path: "/dompetku",
    component: () => <h1>Sedang dalam pengembangan</h1>,
    name: "Dompetku",
  },
  {
    layout: "/umkm",
    path: "/ulasan",
    component: () => <h1>Sedang dalam pengembangan</h1>,
    name: "Ulasan",
  },
  {
    layout: "/umkm",
    path: "/peran-karyawan",
    component: () => <h1>Sedang dalam pengembangan</h1>,
    name: "Peran Karyawan",
  },
];
