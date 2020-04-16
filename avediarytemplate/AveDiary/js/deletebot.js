let bots = document.getElementsByClassName("bot"); // Поиск файлов
let botcounter = bots.length; // Количество файлов
if (botcounter < 1) { // Проверка на пустоту
    document.getElementById("bots-field").insertAdjacentHTML("afterbegin", "<p class='empty'>Тут пока пусто</p>");
}

let deletebtns = document.getElementsByClassName("deletebtn"); // Поиск кнопок удалить

function handler() {
    deleteblock(this);
}

for (let deletebtn of deletebtns) {
    deletebtn.addEventListener('click', handler); // Проверка клика
}



function deleteblock(element) {
    let a = element.getAttribute("data-botID"); // Номер файла
    let deletebtns = document.getElementsByClassName("deletebtn"); // Поиск кнопок удалить
    for (let deletebtn of deletebtns) {
        deletebtn.style.opacity = 0.7; // Прозрачность кнопок удалить
        deletebtn.removeEventListener('click', handler); // Удаление проверки клика
    }
        bots[a].classList.add("delanimation");
        botcounter--;
 // Счётчик файлов --



        setTimeout(function(){

        for (let deletebtn of deletebtns) {
            deletebtn.addEventListener('click', handler);
        }
        for (let deletebtn of deletebtns) {
            deletebtn.style.opacity = 1;
        }
            deletebtns[a].removeEventListener('click', handler);
            bots[a].style.display = "none";
            if (botcounter < 1) { // Проверка на количество блоков
                document.getElementById("bots-field").insertAdjacentHTML("afterbegin",
                    "<p class='empty'>Тут пока пусто</p>");
            }
            toast("Бот отключен");
        },1000);       
}