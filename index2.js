function tinhTien() {
  var soKW = document.getElementById("txtKW").value * 1;
  var tongTien = 0;
  if (soKW <= 50) {
    tongTien = soKW * 500;
  } else if (soKW <= 100) {
    tongTien = 500 * 50 + (soKW - 50) * 650;
  } else if (soKW <= 200) {
    tongTien = 500 * 50 + 650 * 50 + (soKW - 100) * 850;
  } else if (soKW <= 350) {
    tongTien = 500 * 50 + 650 * 50 + 850 * 100 + (soKW - 200) * 1100;
  } else {
    tongTien =
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * 200 + (soKW - 350) * 1300;
  }
  document.getElementById("kQ").innerText =
    "số tiền điện của bạn là " + tongTien;
}
