function gysz() {
  var a = parseFloat(document.getElementById("inputA").value);
  var b = parseFloat(document.getElementById("inputB").value);
  var c = parseFloat(document.getElementById("inputC").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("eredmeny").innerText = "?";
    return;
  }
  var D = Math.pow(b, 2) - 4 * a * c;
  var gyökök_száma = 2;
  if (D<0) {
    gyökök_száma = 0;
  }
  if (D==0) {
    gyökök_száma = 1;
  }
  document.getElementById("eredmeny").innerText = gyökök_száma;
}
