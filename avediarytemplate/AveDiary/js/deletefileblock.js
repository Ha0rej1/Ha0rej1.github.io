setTimeout(() => $(".homepage").removeClass("animated"), 300);

let fileblocks = document.getElementsByClassName("file-block"); // Поиск файлов
let fileblockscounter = fileblocks.length; // Количество файлов
if (fileblockscounter < 1) { // Проверка на пустоту
    document.getElementById("file-field").insertAdjacentHTML("afterbegin", "<p class='empty'>Тут пока пусто</p>");
}

let deletebtns = document.getElementsByClassName("deletebtn"); // Поиск кнопок удалить

function handler() {
    deleteblock(this);
}

for (let deletebtn of deletebtns) {
    deletebtn.addEventListener('click', handler); // Проверка клика
}



function deleteblock(element) {
    let t4 = 2400; // | Задержка перед появлением дока
    let a = element.getAttribute("data-fileID"); // Номер файла
    let trash = document.getElementById("trash"); // Мусорка
    let dockbar = document.getElementById("dockbar"); // Докбар

    let deletebtns = document.getElementsByClassName("deletebtn"); // Поиск кнопок удалить
    for (let deletebtn of deletebtns) {
        deletebtn.style.opacity = 0.7; // Прозрачность кнопок удалить
        deletebtn.removeEventListener('click', handler); // Удаление проверки клика
    }
    if(screen.width<=768){
    trash.classList.add("animatetrash"); // Анимация мусорки
    dockbar.classList.add("animatedock"); // Анимация докбара
    fileblocks[a].classList.add("animatefile"); // Анимация файла

    setTimeout(() => navigator.vibrate([35, 100, 35, 100, 35, 950, 35]), 100); // Вибрации

    var fileblockpos = fileblocks[a].getBoundingClientRect(); // Переменная с позицией файла
    setTimeout(() => fileblocks[a].style.bottom = screen.height - fileblockpos.y - 90.4 + "px", 800);
    // Задана стартовая позиция
    setTimeout(() => fileblocks[a].style.display = "none", 1200); // Спрятать файл
    setTimeout(() => fileblocks[a].insertAdjacentHTML("beforebegin", "<div class='fileclone'></div>"), 800); // клон
    setTimeout(function () { // Снятие защиты от нажатия
        fileblockscounter--; // Счётчик файлов --
        dockbar.classList.remove("animatedock");
        trash.classList.remove("animatetrash");
        if (fileblockscounter < 1) { // Проверка на количество блоков
            document.getElementById("file-field").insertAdjacentHTML("afterbegin",
                "<p class='empty'>Тут пока пусто</p>");
        }
        for (let deletebtn of deletebtns) {
            deletebtn.style.opacity = 1;
        }
        for (let deletebtn of deletebtns) {
            deletebtn.addEventListener('click', handler);
        }
    }, t4);
    }
    else if(screen.width>768){
        fileblocks[a].classList.add("delanimation");
        setTimeout(function(){
                deletebtns[a].removeEventListener('click', handler);
                fileblocks[a].style.display = "none";
                toast("Удалён");
                for (let deletebtn of deletebtns) {
                    deletebtn.style.opacity = 1;
                }
                for (let deletebtn of deletebtns) {
                    deletebtn.addEventListener('click', handler);
                }
                if (fileblockscounter < 1) { // Проверка на количество блоков
                    document.getElementById("file-field").insertAdjacentHTML("afterbegin",
                        "<p class='empty'>Тут пока пусто</p>");
                }
            },1000);     
    }
    else if(user.browser.family == 'Safari'){
        fileblocks[a].classList.add("delanimation");
        setTimeout(function(){
                deletebtns[a].removeEventListener('click', handler);
                fileblocks[a].style.display = "none";
                toast("Удалён");
                for (let deletebtn of deletebtns) {
                    deletebtn.style.opacity = 1;
                }
                for (let deletebtn of deletebtns) {
                    deletebtn.addEventListener('click', handler);
                }
                if (fileblockscounter < 1) { // Проверка на количество блоков
                    document.getElementById("file-field").insertAdjacentHTML("afterbegin",
                        "<p class='empty'>Тут пока пусто</p>");
                }
            },1000);     
    }
}