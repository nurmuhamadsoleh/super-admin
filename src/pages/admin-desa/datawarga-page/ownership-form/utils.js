const modifyBeforePut = {
  residence: (state) => {
    return state.map((item) => ({
      ...item,
      luas_lantai: item.luas_lantai !== "" ? parseInt(item.luas_lantai) : 0,
      jumlah_kamar: item.jumlah_kamar !== "" ? parseInt(item.jumlah_kamar) : 0,
      tpa_tinja: item.tpa_tinja !== "" ? parseInt(item.tpa_tinja) : 0,
    }));
  },
  landNonProductive: (state) => {
    return state.map((landItem) => ({
      ...landItem,
      luas_lahan: landItem.luas_lahan !== "" ? parseInt(landItem.luas_lahan) : 0,
    }));
  },
  landProductive: (state) => {
    return state.map((landItem) => ({
      ...landItem,
      luas_lahan: landItem.luas_lahan !== "" ? parseInt(landItem.luas_lahan) : 0,
      jumlah_produksi: landItem.jumlah_produksi !== "" ? parseInt(landItem.jumlah_produksi) : 0,
    }));
  },
  loan: (state) => {
    return state.map((item) => ({
      ...item,
      jumlah: item.jumlah !== "" ? parseInt(item.jumlah) : 0,
    }));
  },
};

export default modifyBeforePut;
