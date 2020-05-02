var langbut = document.getElementById("languagebut");

langbut.addEventListener('click', function () {
    document.body.insertAdjacentHTML("beforeend", "<div id='screenholder' class='fadein'><div id='holder'></div><div id='langmenu' class='block shadow fit'><ul><li id='ua' class='lang'>Українська</li><li id='bel' class='lang'>Беларуская</li><li id='langexit'>Отмена</li></ul></div></div>");
    document.body.style.overflow = "hidden";
    let screenholder = document.getElementById("screenholder");
    let holder = document.getElementById("holder");
    let langexit = document.getElementById("langexit");
    let langs = document.getElementsByClassName("lang");
    for (let lang of langs) {
        lang.addEventListener('click', function () {
            screenholder.classList.remove('fadein');
            screenholder.classList.add('fadeout');
            alert(lang.id);
            if (lang.className == "bel") {
                alert("bel");
            }
            else if(lang.className == "ua"){
                alert("ua");
            }
            setTimeout(function () {
                screenholder.remove();
                document.body.style.overflow = "auto";
                console.log("Language btn clicked");
            }, 500);
        });
    }
    holder.addEventListener('click', function () {
        screenholder.classList.remove('fadein');
        screenholder.classList.add('fadeout');
        setTimeout(function () {
            screenholder.remove();
            document.body.style.overflow = "auto";
            console.log("Holder clicked");
        }, 500);
    });
    langexit.addEventListener('click', function () {
        screenholder.classList.remove('fadein');
        screenholder.classList.add('fadeout');
        setTimeout(function () {
            screenholder.remove();
            document.body.style.overflow = "auto";
            console.log("Exit clicked");
        }, 500);
    });
});