let image = document.getElementById("cookie");
function changeSizes() {
let clickerCounter = document.getElementById("clicker__counter");
 clickerCounter.textContent = ++(clickerCounter.textContent);
 if(clickerCounter.textContent % 2 === 0){
   image.width = 200;
 } else {
  image.width = 300;
 }
};
image.onclick = changeSizes;
