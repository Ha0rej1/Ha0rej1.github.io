var theme = "Light";
function changeTheme(){
  if(theme=="Light"){
    document.body.classList.add("dark");
    theme="Dark";
  }
  else{
    document.body.classList.remove("dark");
    theme="Light";
  }
}
var gotop = $('#gotop');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    gotop.addClass('gotop-show');
  } else {
    gotop.removeClass('gotop-show');
  }
});

var toastcounter = -1;

    function toast(a) {
        toastcounter++;
        var savecounter = toastcounter;
        document.body.insertAdjacentHTML("beforeend", `<div class="toast customfadeInUp shadow"></div>`);

        var x = document.getElementsByClassName("toast");
        x[savecounter].insertAdjacentHTML("afterbegin", a);
        setTimeout(function () {
            x[savecounter].classList.remove("customfadeInUp");
            x[savecounter].classList.add("customfadeOutDown");
        }, 1500);
    }
