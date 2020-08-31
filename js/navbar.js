window.addEventListener("scroll", colorHeader)
let pageHeader = document.getElementById("page-header")
function colorHeader(){
    if(pageYOffset>300){
        pageHeader.classList.add("color-header")
    }
    else{
        pageHeader.classList.remove("color-header")
    }
}