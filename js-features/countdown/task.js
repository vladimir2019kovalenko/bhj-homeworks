let timer = setInterval(function() {
const time = document.getElementById("timer");
if(time.textContent != 0){
    time.textContent = --(time.textContent);
}else{
    alert('Вы победили в конкурсе!');
}
}, 1000);
