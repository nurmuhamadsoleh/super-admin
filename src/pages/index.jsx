//public routes
import LoginPage from "./login-page";
import SaldoPage from "./saldo-page";
import ResetPassPage from "./reset-pass-page";
import RegisterPage from "./register-page";

//dashboard-admin
import DashboardPage from "./admin-desa/dashboard-page";

//data-desa-admin
import DataWargaPage from "./admin-desa/datawarga-page";
import DataWargaDetail from "./admin-desa/datawarga-page/DataWargaDetail";
import AddDataWarga from "./admin-desa/datawarga-page/AddDataWarga";
import ProfileDashboard from "./admin-desa/profile-dashboard-page";
import UserDashboard from "./admin-desa/user-dashboard";
import AddUserDashboard from "./admin-desa/user-dashboard/AddUserDashboard";

//administrasi-desa

import PengajuanEdesaPage from "./admin-desa/pengajuan-edesa-page";
import TambahPengajuanEdesa from "./admin-desa/pengajuan-edesa-page/tambah-pengajuan-edesa";
import SuratTugas from "./admin-desa/pengajuan-edesa-page/tambah-pengajuan-edesa/surat-tugas";
import SuratKeteranganBedaIdentitas from "./admin-desa/pengajuan-edesa-page/tambah-pengajuan-edesa/surat-keterangan-beda-identitas";
import SuratKeteranganBerpergian from "./admin-desa/pengajuan-edesa-page/tambah-pengajuan-edesa/surat-keterangan-berpergian";
import SuratKeteranganDomisili from "./admin-desa/pengajuan-edesa-page/tambah-pengajuan-edesa/surat-keterangan-domisili";
import SuratKeteranganDomisiliLembaga from "./admin-desa/pengajuan-edesa-page/tambah-pengajuan-edesa/surat-keterangan-domisili-lembaga";
import SuratKeteranganDomisiliNonWarga from "./admin-desa/pengajuan-edesa-page/tambah-pengajuan-edesa/surat-keterangan-domisii-non-warga";
import SuratKeteranganDomisiliPerusahaan from "./admin-desa/pengajuan-edesa-page/tambah-pengajuan-edesa/surat-keterangan-domisili-perusahaan";
import SuratKeteranganPerusahaanNonWarga from "./admin-desa/pengajuan-edesa-page/tambah-pengajuan-edesa/surat-keterangan-perusahaan-non-warga";
//informasi-desa
import BeritaPage from "./admin-desa/berita-page";
import AddNews from "./admin-desa/berita-page/AddNews";
import UpdateNewsPage from "./admin-desa/berita-page/UpdateNewsPage";
import LaporanMasyarakatPage from "./admin-desa/laporan-masyarakat";
import SimpleForum from "./admin-desa/simple-forum";
import InformasiDesaPage from "./admin-desa/informasi-desa";
import TambahInformasiDesa from "./admin-desa/informasi-desa/tambah-informasi-desa";

//bumdes
import BumdesRegistration from "./admin-desa/bumdes-page/BumdesRegistration";
import AddBumdes from "./admin-desa/bumdes-page/AddBumdes";
import AddPengajuanMitraBumdes from "./admin-desa/bumdes-page/AddPengajuanMitra";
import PengajuanMitraBumdes from "./admin-desa/bumdes-page/PengajuanMitra";
import KategoriBumdes from "./admin-desa/bumdes-page/Kategori";
import WisataBumdes from "./admin-desa/bumdes-page/wisata/Wisata";
import AddWisataBumdes from "./admin-desa/bumdes-page/wisata/AddWisata";
import ProdukBumdes from "./admin-desa/bumdes-page/Produk";
import UlasanBumdes from "./admin-desa/bumdes-page/Ulasan";
import TransaksiBumdes from "./admin-desa/bumdes-page/Transaksi";
import PermintaanInvestasiBumdes from "./bumdes/investasi-page/Permintaan";
import PenarikanInvestasiBumdes from "./bumdes/investasi-page/Penarikan";
import InvestmentBumdes from "./bumdes/investasi-page/Investment";
import DetailInvestment from "./bumdes/investasi-page/InvestmentDetail";
import PPOBPage from "./admin-desa/ppob-page";
import BUMDesPPOB from "./bumdes/ppob-page";

//grafik
import GrafikJenisKelamin from "./admin-desa/grafik-jenis-kelamin";
import GrafikUsia from "./admin-desa/grafik-usia";
import GrafikPendidikan from "./admin-desa/grafik-pendidikan";
import GrafikAgama from "./admin-desa/grafik-agama";
import GrafikPekerjaan from "./admin-desa/grafik-pekerjaan";
import GrafikKewarganegaraan from "./admin-desa/grafik-kewarganegaraan";
import GrafikGolonganDarah from "./admin-desa/grafik-golongan-darah";
import GrafikDisabilitas from "./admin-desa/grafik-disabilitas";
import GrafikStatusPerkawinan from "./admin-desa/grafik-status-perkawinan";
import GrafikRtRw from "./admin-desa/grafik-rt-rw";

//pendukung-desa
import PendukungDesa from "./admin-desa/pendukung-desa-page";
import DonorDarahPage from "./admin-desa/donor-darah-page";

//superadmin

import DashboardSuperAdminPage from "./superadmin/dashboard-page";
import InvoicePage from "./superadmin/invoice-page";
import FaqPage from "./superadmin/faq-page";
import AddFaq from "./superadmin/faq-page/add-faq";
import RiwayatTransaki from "./superadmin/pendapatan/riwayat-transaksi"
import DetailRiwayatTransaksi from "./superadmin/pendapatan/riwayat-transaksi/detail-riwayat-transaksi"
import PpobPage from "./superadmin/pendapatan/ppob"
import TambahPpob from "./superadmin/pendapatan/ppob/TambahPpob"
import EditPpob from "./superadmin/pendapatan/ppob/EditPpob"
import TransaksiPage from "./superadmin/pendapatan/transaksi-page"
import TambahTransaksi from "./superadmin/pendapatan/transaksi-page/TambahTransaksi"
import EditTransaksi from "./superadmin/pendapatan/transaksi-page/EditTransaksi"
import PembagianPage from "./superadmin/pendapatan/pembagian-page"
import TambahPembagian from "./superadmin/pendapatan/pembagian-page/TambahPembagian"
import EditPembagian from "./superadmin/pendapatan/pembagian-page/EditPembagian"
import AkunJurnal from "./superadmin/pendapatan/akun-jurnal"
import TambahAkunJurnal from "./superadmin/pendapatan/akun-jurnal/TambahAkunJurnal"
import EditAkunJurnal from "./superadmin/pendapatan/akun-jurnal/EditAkunJurnal"



// Bpd
import BpdDashboardPage from "./bpd/dashboard-page";
import BpdForumPage from "./bpd/informasi-desa-page/forum-masyarakat-page";
import BpdBeritaPage from "./bpd/informasi-desa-page/berita-page";
import BpdAddNews from "./bpd/informasi-desa-page/berita-page/AddNews";
import BpdUpdateNewsPage from "./bpd/informasi-desa-page/berita-page/UpdateNewsPage";

//UMKM
import UMKMDashboardPage from "./umkm/dashboard-page";
import PenarikanInvestasiUMKM from "./umkm/investasi-page/Penarikan";
import InvestmentUMKM from "./umkm/investasi-page/Investment";
import UMKMPesananTertunda from "./umkm/pesanan-page/PesananTertunda";
import UMKMPesananDalamPengantaran from "./umkm/pesanan-page/PesananDalamPengantaran";
import UMKMPesananTerkonfirmasi from "./umkm/pesanan-page/PesananTerkonfirmasi";
import UMKMPesananTerkirim from "./umkm/pesanan-page/terkirim/";
import UMKMPesananSemua from "./umkm/pesanan-page/semua/";
import UMKMKategoriPage from "./umkm/kategori-page/Kategori";
import UMKMSubkategoriPage from "./umkm/kategori-page/Subkategori";
import UMKMTambahKaryawanPage from "./umkm/karyawan-page/TambahBaru";
import UMKMDaftarKaryawanPage from "./umkm/karyawan-page/Daftar";
import UMKMProdukTambahBaruPage from "./umkm/produk-page/TambahBaru";
import UMKMDaftarProdukPage from "./umkm/produk-page/Daftar";
import UMKMBulkImport from "./umkm/produk-page/BulkImport";
import UMKMBulkExport from "./umkm/produk-page/BulkExport";
import UMKMPromoPage from "./umkm/promo-page/Promo";
import UMKMKonfigurasiPage from "./umkm/konfigurasi-page";

import ActiveUserStatistic from "./activeuser-page/ActiveUserStatistic";
import ActiveUserWarga from "./activeuser-page/ActiveUserWarga";
import ActiveUserVerification from "./activeuser-page/ActiveUserVerification";
import ForgotPasswordPage from "./forgot-password-page";
import GrafikPage from "./admin-desa/grafik-page";
import TipeLaporanPage from "./tipe-laporan-page";
import ActivityHistory from "./activityhistory-page";
import LaporPemdes from "./lapor-pemdes-page";
import TemplateSuratPage from "./admin-desa/template-surat-page";

import MitraBumdes from "./mitra-bumdes-page";
import SuratKelahiranPage from "./surat-keterangan-kelahiran-page";
import SuratKematianPage from "./surat-keterangan-kematian-page";
import SuratTugasPerintahPage from "./surat-tugas-perintah-page";
import BuatSuratPage from "./buat-surat-page";
import DatalayananSuratPage from "./data-layanan-surat-page";
import BedaIdentitasPage from "./beda-identititas-page";
import SuratKeteranganBepergianPage from "./surat-keterangan-bepergian-page";
import SuratKeteranganDomisiliPage from "./surat-keterangan-domisili-page";
import SuratKeteranganDomisiliLemabagaPage from "./surat-keterangan-domisili-lembaga-page";
import SuratKeteranganDomisiliNonWargaPage from "./surat-keterangan-domisili-non-warga-page";
import SuratKeteranganDomisiliPerusahaanPage from "./surat-keterangan-domisili-perusahaan-page";
import SuratKeteranganDomisiliPerusahaanNonWargaPage from "./surat-keterangan-domisili-perusahaan-non-warga-page";
import SuratKeteranganDudaJandaPage from "./surat-keterangan-duda-janda-page";
import SuratKeteranganGhaibPage from "./surat-keterangan-ghaib-page";
import SuratKeteranganAlpaPage from "./surat-keterangan-alpa-page";
import SuratKeteranganResiKtpPage from "./surat-keterangan-resi-ktp-page";
import SuratKeteranganStatusPerkawinan from "./surat-keterangan-status-perkawinan";
import SuratKeteranganUsahaPage from "./surat-keterangan-usaha-page";
import SuratKeteranganUsahaNonWargaPage from "./surat-keterangan-usaha-non-warga-page";
import SuratKuasaPage from "./surat-kuasa-page";

import SuratPengantarKehilanganPage from "./surat-pengantar-kehilangan-page";
import SuratPengantarPerkawinanPage from "./surat-pengantar-perkawinan-page";
import SuratPengantarPerkawinanPriaPage from "./surat-pengantar-perkawinan-pria-page";
import SuratRekomendasiIzinKeramaianPage from "./surat-rekomendasi-izin-keramaian-page";
import PembayaranPage from "./pembayaran-page";

import BloodNeed from "./blood-donors-page/BloodNeed";
import BloodProvider from "./blood-donors-page/BloodProvider";
import BloodStock from "./blood-donors-page/BloodStock";
import DonorSchedule from "./blood-donors-page/DonorSchedule";
import DonorList from "./blood-donors-page/DonorList";
import BloodReport from "./blood-donors-page/BloodReport";

import DataInfo from "./info-page/DataInfo";
import AddDataInfo from "./info-page/AddDataInfo";
import ExpenseData from "./info-page/ExpenseData";
import FinancingData from "./info-page/FinancingData";
import IncomeData from "./info-page/IncomeData";
import ProfileData from "./info-page/ProfileData";
import GrafikInfo from "./info-page/GrafikInfo";

import Fundraising from "./donation-page/Fundraising";
import DonationCategory from "./donation-page/DonationCategory";
import FundraisingWarga from "./donation-page/FundraisingWarga";
import FundraisingDesa from "./donation-page/FundraisingDesa";
import AddFundraisingDesa from "./donation-page/AddFundraisingDesa";
import PengajuanIDesaPage from "./pengajuan-edesa-page";
import ListBuatSurat from "./pengajuan-edesa-page/list-buat-surat";
import SuratTugasPerintah from "./pengajuan-edesa-page/surat-tugas-perintah";

export {
  ActiveUserStatistic,
  ActiveUserWarga,
  ActiveUserVerification,
  ActivityHistory,
  AddDataWarga,
  AddDataInfo,
  AddUserDashboard,
  AddBumdes,
  BeritaPage,
  BloodReport,
  BloodNeed,
  BloodProvider,
  BloodStock,
  DataInfo,
  DonorSchedule,
  DonorList,
  AddNews,
  UpdateNewsPage,
  DashboardPage,
  DataWargaPage,
  DataWargaDetail,
  ForgotPasswordPage,
  GrafikInfo,
  GrafikPage,
  LoginPage,
  PengajuanEdesaPage,
  TambahPengajuanEdesa,
  SuratTugas,
  SuratKeteranganBedaIdentitas,
  SuratKeteranganBerpergian,
  SuratKeteranganDomisili,
  SuratKeteranganDomisiliLembaga,
  SuratKeteranganDomisiliNonWarga,
  SuratKeteranganDomisiliPerusahaan,
  SuratKeteranganPerusahaanNonWarga,
  RegisterPage,
  UserDashboard,
  TipeLaporanPage,
  ProfileDashboard,
  LaporPemdes,
  TemplateSuratPage,
  SimpleForum,
  SaldoPage,
  MitraBumdes,
  ExpenseData,
  FinancingData,
  IncomeData,
  ProfileData,
  SuratKelahiranPage,
  SuratKematianPage,
  BuatSuratPage,
  DatalayananSuratPage,
  SuratKeteranganResiKtpPage,
  SuratKeteranganUsahaPage,
  SuratKeteranganUsahaNonWargaPage,
  SuratKuasaPage,
  LaporanMasyarakatPage,
  SuratPengantarKehilanganPage,
  SuratPengantarPerkawinanPage,
  SuratPengantarPerkawinanPriaPage,
  SuratRekomendasiIzinKeramaianPage,
  ResetPassPage,
  Fundraising,
  FundraisingWarga,
  AddFundraisingDesa,
  DonationCategory,
  BedaIdentitasPage,
  SuratKeteranganBepergianPage,
  SuratKeteranganDomisiliPage,
  SuratKeteranganDomisiliLemabagaPage,
  SuratKeteranganDomisiliNonWargaPage,
  SuratKeteranganDomisiliPerusahaanPage,
  SuratKeteranganDomisiliPerusahaanNonWargaPage,
  SuratKeteranganDudaJandaPage,
  SuratKeteranganGhaibPage,
  SuratKeteranganAlpaPage,
  PembayaranPage,
  GrafikJenisKelamin,
  GrafikUsia,
  GrafikPendidikan,
  GrafikAgama,
  GrafikPekerjaan,
  GrafikKewarganegaraan,
  GrafikGolonganDarah,
  SuratTugasPerintahPage,
  FundraisingDesa,
  SuratKeteranganStatusPerkawinan,
  GrafikDisabilitas,
  GrafikStatusPerkawinan,
  GrafikRtRw,
  PengajuanIDesaPage,
  ListBuatSurat,
  SuratTugasPerintah,
  BumdesRegistration,
  TambahInformasiDesa,
  PendukungDesa,
  DonorDarahPage,
  InformasiDesaPage,
  DashboardSuperAdminPage,
  InvoicePage,
  FaqPage,
  AddFaq,
  RiwayatTransaki,
  DetailRiwayatTransaksi,
  PpobPage,
  TambahPpob,
  EditPpob,
  TransaksiPage,
  TambahTransaksi,
  EditTransaksi,
  PembagianPage,
  TambahPembagian,
  EditPembagian,
  AkunJurnal,
  TambahAkunJurnal,
  EditAkunJurnal,
  BpdDashboardPage,
  BpdBeritaPage,
  BpdAddNews,
  BpdUpdateNewsPage,
  BpdForumPage,
  PengajuanMitraBumdes,
  KategoriBumdes,
  AddWisataBumdes,
  WisataBumdes,
  ProdukBumdes,
  UlasanBumdes,
  TransaksiBumdes,
  AddPengajuanMitraBumdes,
  PermintaanInvestasiBumdes,
  PenarikanInvestasiBumdes,
  InvestmentBumdes,
  DetailInvestment,
  PPOBPage,
  BUMDesPPOB,
  UMKMDashboardPage,
  PenarikanInvestasiUMKM,
  InvestmentUMKM,
  UMKMPesananTertunda,
  UMKMPesananDalamPengantaran,
  UMKMPesananTerkonfirmasi,
  UMKMPesananTerkirim,
  UMKMPesananSemua,
  UMKMKategoriPage,
  UMKMSubkategoriPage,
  UMKMTambahKaryawanPage,
  UMKMDaftarKaryawanPage,
  UMKMProdukTambahBaruPage,
  UMKMDaftarProdukPage,
  UMKMBulkImport,
  UMKMBulkExport,
  UMKMPromoPage,
  UMKMKonfigurasiPage,
};
