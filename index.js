const khuA = "khuA";
const khuB = "khuB";
const khuC = "khuC";
const khuNone = "khuNone";
const doiTuong1 = "doiTuong1";
const doiTuong2 = "doiTuong2";
const doiTuong3 = "doiTuong3";
const doiTuong0 = "doiTuong0";

function diemKhuVucUuTien(khuVuc) {
  if (khuVuc === khuA) {
    return 2;
  }

  if (khuVuc === khuB) {
    return 1;
  }
  if (khuVuc === khuC) {
    return 0.5;
  }
  if (khuNone === khuNone) {
    return 0;
  }
}
function diemDoiTuongUuTien(doiTuong) {
  if (doiTuong === doiTuong1) {
    return 2.5;
  }
  if (doiTuong === doiTuong2) {
    return 1.5;
  }
  if (doiTuong === doiTuong3) {
    return 1;
  }
  if (doiTuong === doiTuong0) {
    return 0;
  }
}
function ketQua1() {
  var khuVucUuTien = document.querySelector(
    'input[name="khuVuc"]:checked'
  ).value;
  var khuVuc = diemKhuVucUuTien(khuVucUuTien);
  var doiTuongUuTien = document.querySelector(
    'input[name="doiTuong"]:checked'
  ).value;
  var doiTuong = diemDoiTuongUuTien(doiTuongUuTien);
  var diemMonThu1Vl = document.getElementById("diemMonThu1").value * 1;
  var diemMonThu2Vl = document.getElementById("diemMonThu2").value * 1;
  var diemMonThu3Vl = document.getElementById("diemMonThu3").value * 1;
  var diemChuanVl = 21;
  var diem3Mon = diemMonThu1Vl + diemMonThu2Vl + diemMonThu3Vl;
  var diemTong = diem3Mon + khuVuc + doiTuong;
  console.log(diemTong);
  if (diemMonThu1Vl === 0) {
    document.getElementById("tongDiem").innerText =
      "Tổng điểm của bạn là " + diemTong + " bạn đã rớt";
  } else if (diemMonThu2Vl === 0) {
    document.getElementById("tongDiem").innerText =
      "Tổng điểm của bạn là " + diemTong + " bạn đã rớt";
  } else if (diemMonThu3Vl === 0) {
    document.getElementById("tongDiem").innerText =
      "Tổng điểm của bạn là " + diemTong + " bạn đã rớt";
  } else if (diemTong >= diemChuanVl) {
    document.getElementById("tongDiem").innerText =
      "Tổng điểm của bạn là " + diemTong + " bạn đã đậu";
  } else if (diemTong < diemChuanVl) {
    document.getElementById("tongDiem").innerText =
      "Tổng điểm của bạn là " + diemTong + " bạn đã rớt";
  }
}
