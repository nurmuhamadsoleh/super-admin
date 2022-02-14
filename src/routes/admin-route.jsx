import {
  ActivityHistory,
  AddBumdes,
  AddDataWarga,
  AddNews,
  AddPengajuanMitraBumdes,
  AddUserDashboard,
  AddWisataBumdes,
  BeritaPage,
  BumdesRegistration,
  DashboardPage,
  DataWargaPage,
  DonorDarahPage,
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
  InformasiDesaPage,
  KategoriBumdes,
  LaporanMasyarakatPage,
  LaporPemdes,
  TemplateSuratPage,
  PendukungDesa,
  PengajuanEdesaPage,
  PengajuanMitraBumdes,
  PPOBPage,
  ProdukBumdes,
  ProfileDashboard,
  SimpleForum,
  SuratKeteranganBedaIdentitas,
  SuratKeteranganBerpergian,
  SuratKeteranganDomisili,
  SuratKeteranganDomisiliLembaga,
  SuratKeteranganDomisiliNonWarga,
  SuratKeteranganDomisiliPerusahaan,
  SuratKeteranganPerusahaanNonWarga,
  SuratTugas,
  TambahInformasiDesa,
  TambahPengajuanEdesa,
  TransaksiBumdes,
  UlasanBumdes,
  UpdateNewsPage,
  UserDashboard,
  WisataBumdes,
} from "../pages";

// import TemplateSurat from '../components';
export const routes = [
  //dashboard
  {
    path: "/dashboard",
    component: DashboardPage,
    name: "dashboard",
    layout: "/admin-desa",
  },

  //data-desa
  {
    path: "/profile-dashboard",
    component: ProfileDashboard,
    name: "profile-dashboard",
    layout: "/admin-desa",
  },
  {
    path: "/data-warga",
    component: DataWargaPage,
    name: "datawarga",
    layout: "/admin-desa",
  },
  {
    path: "/data-warga/edit/:id",
    component: AddDataWarga,
    name: "Edit DataWargaPage",
    layout: "/admin-desa",
  },
  {
    path: "/data-warga/add",
    component: AddDataWarga,
    name: "AddDataWarga",
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/anggota-desa",
    component: UserDashboard,
    name: "user-dashboard",
    layout: "/admin-desa",
  },
  {
    path: "/anggota-desa/add",
    component: AddUserDashboard,
    name: "AddUserDashboard",
    layout: "/admin-desa",
  },
  {
    path: "/aktifitas-anggota",
    component: ActivityHistory,
    name: "riwayat-aktifitas",
    layout: "/admin-desa",
  },

  //administrasi-desa
  {
    path: "/pengajuan-edesa",
    component: PengajuanEdesaPage,
    name: "Pengajuan E-desa",
    layout: "/admin-desa",
  },

  {
    path: "/pengajuan-edesa/add",
    component: TambahPengajuanEdesa,
    name: "Pengajuan E-desa",
    layout: "/admin-desa",
  },
  {
    path: "/pengajuan-edesa/add/surat-tugas",
    component: SuratTugas,
    name: "Pengajuan E-desa",
    layout: "/admin-desa",
  },
  {
    path: "/pengajuan-edesa/add/surat-keterangan-beda-identitas",
    component: SuratKeteranganBedaIdentitas,
    name: "Pengajuan E-desa",
    layout: "/admin-desa",
  },
  {
    path: "/pengajuan-edesa/add/surat-keterangan-berpergian",
    component: SuratKeteranganBerpergian,
    name: "Pengajuan E-desa",
    layout: "/admin-desa",
  },
  {
    path: "/pengajuan-edesa/add/surat-keterangan-domisili",
    component: SuratKeteranganDomisili,
    name: "Pengajuan E-desa",
    layout: "/admin-desa",
  },
  {
    path: "/pengajuan-edesa/add/surat-keterangan-domisili-lembaga",
    component: SuratKeteranganDomisiliLembaga,
    name: "Pengajuan E-desa",
    layout: "/admin-desa",
  },
  {
    path: "/pengajuan-edesa/add/surat-keterangan-domisili-non-warga",
    component: SuratKeteranganDomisiliNonWarga,
    name: "Pengajuan E-desa",
    layout: "/admin-desa",
  },
  {
    path: "/pengajuan-edesa/add/surat-keterangan-domisili-perusahaan",
    component: SuratKeteranganDomisiliPerusahaan,
    name: "Pengajuan E-desa",
    layout: "/admin-desa",
  },
  {
    path: "/pengajuan-edesa/add/surat-keterangan-domisili-perusahaan-non-warga",
    component: SuratKeteranganPerusahaanNonWarga,
    name: "Pengajuan E-desa",
    layout: "/admin-desa",
  },
  {
    path: "/kop-surat",
    component: LaporPemdes,
    name: "kop-surat",
    layout: "/admin-desa",
  },
  {
    path: "/template-surat",
    component: TemplateSuratPage,
    name: "template-surat",
    layout: "/admin-desa",
  },

  //informasi-desa
  {
    path: "/informasi-desa",
    component: InformasiDesaPage,
    name: "Informasi Desa",
    layout: "/admin-desa",
  },
  {
    path: "/informasi-desa/add",
    component: TambahInformasiDesa,
    name: "Informasi Desa",
    layout: "/admin-desa",
  },
  {
    path: "/berita",
    component: BeritaPage,
    name: "berita",
    layout: "/admin-desa",
  },
  {
    path: "/berita/add",
    component: AddNews,
    name: "berita",
    layout: "/admin-desa",
  },
  {
    path: "/berita/update/:id",
    component: UpdateNewsPage,
    name: "berita",
    layout: "/admin-desa",
  },
  {
    path: "/laporan-masyarakat",
    component: LaporanMasyarakatPage,
    name: "Laporan Masyarakat",
    layout: "/admin-desa",
  },
  {
    path: "/forum-masyarakat",
    component: SimpleForum,
    name: "simple-forum",
    layout: "/admin-desa",
  },

  //bumdes
  {
    path: "/daftar-mitra",
    component: BumdesRegistration,
    name: "Daftar Mitra Bumdes",
    layout: "/admin-desa",
  },
  {
    path: "/daftar-mitra/add",
    component: AddBumdes,
    name: "Add Mitra Bumdes",
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/pengajuan-mitra",
    component: PengajuanMitraBumdes,
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/pengajuan-mitra/add/",
    component: AddBumdes,
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/pengajuan-mitra/add/:id",
    component: AddPengajuanMitraBumdes,
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/kategori",
    component: KategoriBumdes,
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/wisata",
    component: WisataBumdes,
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/wisata/add",
    component: AddWisataBumdes,
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/produk",
    component: ProdukBumdes,
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/transaksi",
    component: TransaksiBumdes,
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/ulasan",
    component: UlasanBumdes,
    layout: "/admin-desa",
    exact: true,
  },
  {
    path: "/ppob",
    component: PPOBPage,
    name: "PPOB",
    layout: "/admin-desa",
  },
  // {
  //   path: "/riwayat-transaksi",
  //   component: () => <h1>Sedang Dalam Pengembangan</h1>,
  //   name: "Riwayat Transaksi",
  //   layout: "/admin-desa",
  // },

  //grafik
  {
    path: "/jenis-kelamin",
    component: GrafikJenisKelamin,
    name: "Jenis Kelamin",
    layout: "/admin-desa",
  },
  {
    path: "/grafik-usia",
    component: GrafikUsia,
    name: "Usia",
    layout: "/admin-desa",
  },
  {
    path: "/pendidikan",
    component: GrafikPendidikan,
    name: "Pendidikan",
    layout: "/admin-desa",
  },
  {
    path: "/agama",
    component: GrafikAgama,
    name: "Pendidikan",
    layout: "/admin-desa",
  },
  {
    path: "/pekerjaan",
    component: GrafikPekerjaan,
    name: "Pekerjaan",
    layout: "/admin-desa",
  },
  {
    path: "/kewarganegaraan",
    component: GrafikKewarganegaraan,
    name: "Kewarganegaraan",
    layout: "/admin-desa",
  },
  {
    path: "/golongan-darah",
    component: GrafikGolonganDarah,
    name: "Golongan Darah",
    layout: "/admin-desa",
  },
  {
    path: "/disabilitas",
    component: GrafikDisabilitas,
    name: "Disabilitas",
    layout: "/admin-desa",
  },
  {
    path: "/status-perkawinan",
    component: GrafikStatusPerkawinan,
    name: "Status Perkawinan",
    layout: "/admin-desa",
  },
  {
    path: "/rt-rw",
    component: GrafikRtRw,
    name: "RT-RW",
    layout: "/admin-desa",
  },

  //pendukung-desa
  {
    path: "/pendukung-desa",
    component: PendukungDesa,
    name: "Pendukung Desa",
    layout: "/admin-desa",
  },
  {
    path: "/donor-darah",
    component: DonorDarahPage,
    name: "Template Surat",
    layout: "/admin-desa",
  },

  // {
  //   path: "/saldo",
  //   component: SaldoPage,
  //   name: "Saldo",
  //   layout: "/admin-desa",
  // },

  // {
  //   path: "/info",
  //   component: DataInfo,
  //   name: "Info",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/info/add",
  //   component: AddDataInfo,
  //   name: "Add Info",
  //   layout: "/admin-desa",
  //   exact: true,
  // },
  // {
  //   path: "/info-grafik",
  //   component: GrafikInfo,
  //   name: "Info Grafik",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/info-expense",
  //   component: ExpenseData,
  //   name: "Info Expense",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/info-financing",
  //   component: FinancingData,
  //   name: "Info Financing",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/info-income",
  //   component: IncomeData,
  //   name: "Info Income",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/info-profile",
  //   component: ProfileData,
  //   name: "Info Profile",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/mitra-bumdes",
  //   component: MitraBumdes,
  //   name: "Mitra Bumdes",
  //   layout: "/admin-desa",
  // },

  // {
  //   path: "/surat-keterangan-kelahiran",
  //   component: SuratKelahiranPage,
  //   name: "jenis-keeterangan-kelahiran",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-kematian",
  //   component: SuratKematianPage,
  //   name: "surat-keterangan-kematian",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-tugas-perintah",
  //   component: SuratTugasPerintahPage,
  //   name: "surat-tugas-perintah",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-beda-identitas",
  //   component: BedaIdentitasPage,
  //   name: "surat-beda-identitas",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-bepergian",
  //   component: SuratKeteranganBepergianPage,
  //   name: "surat-keterangan-bepergian",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-domisili",
  //   component: SuratKeteranganDomisiliPage,
  //   name: "surat-keterangan-domisili",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-domisili-lembaga",
  //   component: SuratKeteranganDomisiliLemabagaPage,
  //   name: "surat-keterangan-domisili-lembaga",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-domisili-non-warga",
  //   component: SuratKeteranganDomisiliNonWargaPage,
  //   name: "surat-keterangan-domisili-non-warga",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-domisili-perusahaan",
  //   component: SuratKeteranganDomisiliPerusahaanPage,
  //   name: "surat-keterangan-domisili-perusahaan",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-domisili-perusahaan-non-warga",
  //   component: SuratKeteranganDomisiliPerusahaanNonWargaPage,
  //   name: "surat-keterangan-domisili-perusahaan-non-warga",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-duda-janda",
  //   component: SuratKeteranganDudaJandaPage,
  //   name: "surat-keterangan-duda-janda",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-ghaib",
  //   component: SuratKeteranganGhaibPage,
  //   name: "surat-keterangan-ghaib",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-alpa",
  //   component: SuratKeteranganAlpaPage,
  //   name: "surat-keterangan-alpa",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/usia",
  //   component: "",
  //   name: "usia",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-resi-ktp-sementara",
  //   component: SuratKeteranganResiKtpPage,
  //   name: "Surat Keterangan Resi KTP Sementara",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-status-perkawinan",
  //   component: SuratKeteranganStatusPerkawinan,
  //   name: "Surat Keterangan STatus Perkawinan",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-usaha",
  //   component: SuratKeteranganUsahaPage,
  //   name: "Surat Keterangan Usaha",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-keterangan-usaha-non-warga",
  //   component: SuratKeteranganUsahaNonWargaPage,
  //   name: "SUrat Keterangan Usaha Non Warga",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-kuasa",
  //   component: SuratKuasaPage,
  //   name: "Surat Kuasa",
  //   layout: "/admin-desa",
  // },

  // {
  //   path: "/surat-pengantar-kehilangan",
  //   component: SuratPengantarKehilanganPage,
  //   name: "Surat Pengantar Kehilangan",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-rekomendasi-izin-keramaian",
  //   component: SuratRekomendasiIzinKeramaianPage,
  //   name: "Surat Rekomendasi Izin Keramaian",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-pengantar-perkawinan",
  //   component: SuratPengantarPerkawinanPage,
  //   name: "Surat Pengantar Perkawinan Pria",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-pengantar-perkawinan-pria",
  //   component: SuratPengantarPerkawinanPriaPage,
  //   name: "Surat Pengantar Perkawinan Pria",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/surat-rekomendasi-izin-keramaian",
  //   component: SuratPengantarPerkawinanPriaPage,
  //   name: "Surat Pengantar Perkawinan Pria",
  //   layout: "/admin-desa",
  // },

  // {
  //   path: "/aktifitas-anggota",
  //   component: ActivityHistory,
  //   name: "riwayat-aktifitas",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/active-user-statistic",
  //   component: ActiveUserStatistic,
  //   name: "active-user-statistic",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/active-user-warga",
  //   component: ActiveUserWarga,
  //   name: "active-user-warga",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/active-user-verifikasi",
  //   component: ActiveUserVerification,
  //   name: "active-user-verifikasi",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/grafik-laporan",
  //   component: GrafikPage,
  //   name: "active-user-verifikasi",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/tipe-laporan",
  //   component: TipeLaporanPage,
  //   name: "Tipe Laporan",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/blood-need",
  //   component: BloodNeed,
  //   name: "Butuh Darah",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/blood-provider",
  //   component: BloodProvider,
  //   name: "Provider Darah",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/blood-stock",
  //   component: BloodStock,
  //   name: "Stock Darah",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/donor-schedule",
  //   component: DonorSchedule,
  //   name: "Jadwal Donor",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/blood-report",
  //   component: BloodReport,
  //   name: "Report Darah",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/blood-donors",
  //   component: DonorList,
  //   name: "Pendonor",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/buat-surat",
  //   component: BuatSuratPage,
  //   name: "buat-surat",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/data-layanan-surat",
  //   component: DatalayananSuratPage,
  //   name: "data-layanan-surat",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/donation-category",
  //   component: DonationCategory,
  //   name: "DonationCategory",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/fundraising",
  //   component: Fundraising,
  //   name: "Fundraising",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/fundraising-warga",
  //   component: FundraisingWarga,
  //   name: "Fundraising Warga",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/fundraising-desa",
  //   component: FundraisingDesa,
  //   name: "Fundraising Desa",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/fundraising-desa/add",
  //   component: AddFundraisingDesa,
  //   name: "Add Fundraising Desa",
  //   layout: "/admin-desa",
  // },
  // {
  //   path: "/pembayaran",
  //   component: PembayaranPage,
  //   name: "pembayaran",
  //   layout: "/admin-desa",
  // },
];