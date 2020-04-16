if (screen.width >= 768) {
    $(".page-animation").removeClass("fadeInUp");
    $(".page-animation").addClass("fadeInLeft");

}
document.addEventListener("DOMContentLoaded", function (event) {
    if (screen.width >= 768) {
    let drive = document.getElementById("avedrive");
    let mainblock = document.getElementById("mainblock");
    let field = document.getElementById("file-field");
    setTimeout(() => field.style.height = "80%", 100);
    setTimeout(() => drive.style.height = mainblock.offsetHeight + "px", 100);
}
});
