let artname = document.getElementById("artname");
let header = document.getElementById("header");
let sticky = document.getElementById("first").offsetHeight;

window.addEventListener("scroll", ()=>{
    if(getY(artname)+130>document.getElementById('second').offsetHeight){
        artname.classList.add('cont');
        header.classList.add("ready");
    }
    else{
        artname.classList.remove('cont');
        header.classList.remove("ready");
    }

    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }

    if(window.pageYOffset>10){
        for(let i of document.getElementsByClassName("first-wh")){
            i.classList.add("first-hide")
        }
    }
    else{
        for(let i of document.getElementsByClassName("first-wh")){
            i.classList.remove("first-hide");
        }
    }
})

function getY(elem){
    return elem.getBoundingClientRect().top + window.pageYOffset;
}

let releases = document.getElementsByClassName("release-hover");
let bgRelease = document.getElementById('background-release') // Фон 1
let bgRelease2 = document.getElementById('background-release2') // Фон 2
let bgselect = false // Порядок фонов

for(let i of releases){
    i.addEventListener("mouseover", ()=>{
        if(!bgselect){ // Если фон 1
            if(bgRelease.style.backgroundImage != "url(\""+ i.querySelector("img").getAttribute("src") +"\")"){ 
                // Если сейчас фон не такой
                bgRelease2.style.backgroundImage = "url(\""+ i.querySelector("img").getAttribute("src") +"\")";
                bgRelease.classList.add('test');
                bgRelease2.classList.remove('test');
                bgselect = true;
            }
        }
        else{ // Если фон 2
            if(bgRelease2.style.backgroundImage != "url(\""+ i.querySelector("img").getAttribute("src") +"\")"){
                // Если сейчас фон не такой
                bgRelease.style.backgroundImage = "url(\""+ i.querySelector("img").getAttribute("src") +"\")";
                bgRelease.classList.remove('test');
                bgRelease2.classList.add('test');
                bgselect = false;
            }
        }
    })
}