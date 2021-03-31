 
function getHole(index) {
    const itemLists = document.getElementById(`hole${index}`);
    for (let i = 0; i < itemLists.length; i++) {
      itemLists[i].onclick = function () {
        if (hole.className.includes('hole_has-mole')) {
          let killed = document.getElementById(`dead`);
          killed.textContent = ++(killed.textContent);
         if(killed.textContent === 10){
           alert('Победа!');
         }
        } else {
          let miss = document.getElementById(`lost`);
          miss.textContent = ++(miss.textContent);
          if(miss.textContent === 5){
           alert('Вы проиграли!');
         }
        }
      }
    }
  }
