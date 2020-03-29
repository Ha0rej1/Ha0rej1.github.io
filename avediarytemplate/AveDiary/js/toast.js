var toastcounter = -1;

    function toast(a) {
        toastcounter++;
        var savecounter = toastcounter;
        document.body.insertAdjacentHTML("beforeend", `<div class="toast customfadeInUp"></div>`);

        var x = document.getElementsByClassName("toast");
        x[savecounter].insertAdjacentHTML("afterbegin", a);
        setTimeout(function () {
            x[savecounter].classList.remove("customfadeInUp");
            x[savecounter].classList.add("customfadeOutDown");
        }, 1500);
    }