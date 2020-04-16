let students = document.getElementsByClassName("student"); // Поиск файлов
let studentscounter = students.length; // Количество файлов
if (studentscounter < 1) { // Проверка на пустоту
    document.getElementById("students-field").insertAdjacentHTML("afterbegin", "<p class='empty'>Тут пока пусто</p>");
}
let deletebtns = document.getElementsByClassName("deletebtn"); // Поиск кнопок удалить

function handler() {
    deleteblock(this);
}

for (let deletebtn of deletebtns) {
    deletebtn.addEventListener('click', handler); // Проверка клика
}



function deleteblock(element) {
    let a = element.getAttribute("data-studentID"); // Номер файла
    let deletebtns = document.getElementsByClassName("deletebtn"); // Поиск кнопок удалить
    for (let deletebtn of deletebtns) {
        deletebtn.style.opacity = 0.7; // Прозрачность кнопок удалить
        deletebtn.removeEventListener('click', handler); // Удаление проверки клика
    }
        students[a].classList.add("delanimation");
        studentscounter--;
 // Счётчик файлов --
        if (studentscounter < 1) { // Проверка на количество блоков
            document.getElementById("students-field").insertAdjacentHTML("afterbegin",
                "<p class='empty'>Тут пока пусто</p>");
        }


        setTimeout(function(){

        for (let deletebtn of deletebtns) {
            deletebtn.addEventListener('click', handler);
        }
        for (let deletebtn of deletebtns) {
            deletebtn.style.opacity = 1;
        }
            deletebtns[a].removeEventListener('click', handler);
            students[a].style.display = "none";
            toast("Удалён");
        },1000);       
}