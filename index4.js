{
  const soKetNoiEl = document.querySelector("#soKetNoi");
  const soKenhEl = document.querySelector("#soKenh");
  const chonKHEl = document.querySelector("#chonKh");
  const tinhTienEl = document.querySelector("#submit");
  const ketQuaEl = document.querySelector("#ketQua");

  var phiXuLyHoaDon;
  var donGiaKetNoiDau;
  var donGiaKenhCaoCap;
  var donGiaKetNoiThem;

  function bangGiaPhanLoaiKH(kh) {
    if (kh === "nd") {
      phiXuLyHoaDon = 4.5;
      donGiaKetNoiDau = 20.5;
      donGiaKetNoiThem = 0;
      donGiaKenhCaoCap = 7.5;
    } else if (kh === "dn") {
      phiXuLyHoaDon = 15;
      donGiaKetNoiDau = 75;
      donGiaKetNoiThem = 5;
      donGiaKenhCaoCap = 50;
    }
  }

  function tinhPhiDichVuCoBan(soKetNoi, donGiaKetNoiDau, donGiaKetNoiThem) {
    if (soKetNoi <= 10) {
      return donGiaKetNoiDau * soKetNoi;
    } else {
      return donGiaKetNoiDau * 10 + (soKetNoi - 10) * donGiaKetNoiThem;
    }
  }

  chonKHEl.onchange = function () {
    let loaiKH = chonKHEl.value;

    if (loaiKH === "nd") {
      soKetNoiEl.disabled = true;
      soKetNoiEl.value = 1;
    } else {
      soKetNoiEl.disabled = false;
    }
    ketQuaEl.value = null;
  };
  function checkNum(num) {
    if (num >= 0 && num % 1 == 0) {
      return true;
    } else {
      return false;
    }
  }
  tinhTienEl.onclick = function () {
    const loaiKH = chonKHEl.value;
    const soKetNoi = soKetNoiEl.value * 1;
    const soKenhCaoCap = soKenhEl.value * 1;

    bangGiaPhanLoaiKH(loaiKH);
    let phiDichVuCoBan = tinhPhiDichVuCoBan(
      soKetNoi,
      donGiaKetNoiDau,
      donGiaKetNoiThem
    );
    if (loaiKH) {
      if (checkNum(soKetNoi) && checkNum(soKenhCaoCap)) {
        let ketQua =
          phiXuLyHoaDon + phiDichVuCoBan + soKenhCaoCap * donGiaKenhCaoCap;
        ketQuaEl.value = ketQua + " $";
      } else {
        ketQuaEl.value = null;
        alert("Nhập sai dữ liệu");
      }
    } else {
      alert("Vui lòng chọn loại Khách Hàng");
      ketQuaEl.value = null;
    }
  };
}
