let artname = document.getElementById("artname");
let header = document.getElementById("header")

window.addEventListener("scroll", ()=>{
    if(getY(artname)+130>getY(document.getElementById('second'))){
        artname.classList.add('cont');
        header.classList.add("ready");
    }
    else{
        artname.classList.remove('cont');
        header.classList.remove("ready");
    }
})

function getY(elem){
    let box = elem.getBoundingClientRect()
    return box.top + pageYOffset
}

window.onscroll = ()=>{
    myfunction();
}


var sticky = document.getElementById("first").offsetHeight
function myfunction(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky")
    }
}