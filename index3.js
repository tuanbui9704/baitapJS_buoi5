function tinhThue() {
  var thuNhapValue = document.getElementById("thuNhap").value * 1;
  var soNguoiValue = document.getElementById("soNguoi").value * 1;
  var thuNhapChiuThue = thuNhapValue - 4 - soNguoiValue * 1.6;
  var tongTien = 0;

  if (thuNhapValue <= 60) {
    tongTien = (parseFloat(thuNhapChiuThue) * 5) / 100;
  } else if (thuNhapValue > 60 && thuNhapValue <= 120) {
    tongTien = (parseFloat(thuNhapChiuThue) * 10) / 100;
  } else if (thuNhapValue > 120 && thuNhapValue <= 210) {
    tongTien = (parseFloat(thuNhapChiuThue) * 15) / 100;
  } else if (thuNhapValue > 210 && thuNhapValue <= 384) {
    tongTien = (parseFloat(thuNhapChiuThue) * 20) / 100;
  } else if (thuNhapValue > 384 && thuNhapValue <= 624) {
    tongTien = (parseFloat(thuNhapChiuThue) * 25) / 100;
  } else if (thuNhapValue > 624 && thuNhapValue <= 960) {
    tongTien = (parseFloat(thuNhapChiuThue) * 30) / 100;
  } else if (thuNhapValue > 960) {
    tongTien = (parseFloat(thuNhapChiuThue) * 35) / 100;
  }
  document.getElementById("kQ1").innerText =
    "Tổng thuế thu nhập cá nhân của bạn là " + tongTien.toFixed(3) + " Triệu";
}
