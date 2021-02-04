let section = document.getElementById('first-section')
var move = 0;

window.addEventListener('scroll', ()=>{
    section.style.backgroundPositionX = move+"px";
    move+=50
})

// setInterval(()=>{
//     section.style.backgroundPositionX = move+"px";
//     move+=1;
// }, 10)