let image = document.getElementById("cookie");
const clicker = image.onclick = function () {
  this.width = 300;
  let clickerCounter = document.getElementById("clicker__counter");
  clickerCounter.textContent =+ 1;
}