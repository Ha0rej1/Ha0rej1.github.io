var pagechange = document.getElementById("pagechange");
var headerbtns = document.getElementsByClassName("headerbtn")
$(document).ready(function () {

    $(function () {
        var flag = new Boolean(true); // Защитит от частого нажатия на кнопку

        // Клик
        $('.pagechange').click(function (e) {
            openUrl($(this));
            e.preventDefault();
        })

        /**
         * Открывает ссылку с задержкой
         * 
         * @param {object} a - Нажатая кнопка
         * @return {boolean}
         */
        function openUrl(a) {
            var delay = 850, // Задержка 0.25 секунд
                uri = a.attr('href'); // URL

            // Проверяем не начата ли загрузка какой-либо ссылки
            if (flag == true) {
                flag = false;
                
                // Добавляем анимации
                pagechange.classList.remove("fadeinupbut");
                pagechange.classList.add("fadeoutdownbut");
                for(let headerbtn of headerbtns){
                    headerbtn.classList.remove("fadein")
                    headerbtn.classList.add("fadeout")
                }

                // С задержкой открываем URL, возвращая штатный текст кнопке, разрешаем открывать новые ссылки
                setTimeout(function () {
                    flag = true;

                    // Проверяем открыть ссылку в новом окне или в текущем

                    window.location = uri;
                    return;

                }, delay);
            }

            return;
        }

    });

});