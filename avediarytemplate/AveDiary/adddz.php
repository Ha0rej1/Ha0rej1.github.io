<!DOCTYPE html>
<html lang="en">

<head>
    <?php require "head.php"; ?>
</head>

<body>
<?php require_once "dockbar.php";?>
    <h1 id="project-header"><a class="pagechange" href="index.php"><i
        class="icon-arrow-back back animated animated-btns fadeIn faster"></i></a><a class="pagechange header-text" href="index.php">Ave Diary</a></h1>
    <div class="animated adddzpage page-animation fadeInUp faster">
        <form class="block">
            <a class="pagechange" href="addlesson.php">Добавить предмет</a>
            <h4>Задание</h4>
            <input type="text">
            <h4>Задание</h4>
            <select name="lesson">
                <option value="-">–</option>
                <option value="Українська мова">Українська мова</option>
                <option value="Українська література">Українська література</option>
                <option value="Російська мова">Російська мова</option>
                <option value="Російська література">Російська література</option>
                <option value="Всесвітня історія">Всесвітня історія</option>
                <option value="Історія України">Історія України</option>
                <option value="Правознавство">Правознавство</option>
                <option value="Художня культура">Художня культура</option>
                <option value="Алгебра">Алгебра</option>
                <option value="Геометрія">Геометрія</option>
                <option value="Математика">Математика</option>
                <option value="Музика">Музика</option>
                <option value="Біологія">Біологія</option>
                <option value="Хімія">Хімія</option>
                <option value="Географія">Географія</option>
                <option value="Фізика">Фізика</option>
                <option value="Інформатика">Інформатика</option>
                <option value="Фізкультура">Фізкультура</option>
                <option value="Захист Вітчизни">Захист Вітчизни</option>
                <option value="Основи Здоров`я">Основи Здоров`я</option>
                <option value="Основи Християнської Етики">Основи Християнської Етики</option>
                <option value="Класна година">Класна година</option>
                <option value="Малювання">Малювання</option>
                <option value="Праця хлопці">Праця хлопці</option>
                <option value="Праця хлопці">Праця хлопці</option>
                <option value="Праця">Праця</option>
                <option value="Читання">Читання</option>
                <option value="Письмо">Письмо</option>
                <option value="Креслення">Креслення</option>
                <option value="Природознавство">Природознавство</option>
                <option value="Я та Україна">Я та Україна</option>
                <option value="Екологія">Екологія</option>
                <option value="Англійська мова 1">Англійська мова 1</option>
                <option value="Англійська мова 2">Англійська мова 2</option>
                <option value="Англійська мова 3">Англійська мова 3</option>
                <option value="Німецька мова 1">Німецька мова 1</option>
                <option value="Німецька мова 2">Німецька мова 2</option>
                <option value="Німецька мова 3">Німецька мова 3</option>
                <option value="Французька мова 1">Французька мова 1</option>
                <option value="Французька мова 2">Французька мова 2</option>
                <option value="Французька мова 3">Французька мова 3</option>
                <option value="Англійська література 1">Англійська література 1</option>
                <option value="Англійська література 2">Англійська література 2</option>
                <option value="Англійська література3">Англійська література3</option>
                <option value="Німецька література 1">Німецька література 1</option>
                <option value="Німецька література 2">Німецька література 2</option>
                <option value="Німецька література 3">Німецька література 3</option>
                <option value="Французька література 1">Французька література 1</option>
                <option value="Французька література 2">Французька література 2</option>
                <option value="Французька література 3">Французька література 3</option>
                <option value="Англійський бізнес 1">Англійський бізнес 1</option>
                <option value="Англійський бізнес 2">Англійський бізнес 2</option>
                <option value="Англійський бізнес 3">Англійський бізнес 3</option>
                <option value="Німецький бізнес 1">Німецький бізнес 1</option>
                <option value="Німецький бізнес 2">Німецький бізнес 2</option>
                <option value="Німецький бізнес 3">Німецький бізнес 3</option>
                <option value="Французький бізнес 1">Французький бізнес 1</option>
                <option value="Французький бізнес 2">Французький бізнес 2</option>
                <option value="Французький бізнес 3">Французький бізнес 3</option>
                <option value=""></option>
                <option value="Білоруська мова ">Білоруська мова </option>
                <option value="білоруська література">білоруська література</option>
                <option value="Химия">Химия</option>
                <option value="Английский язык ">Английский язык </option>
                <option value="История ">История </option>
                <option value="Алгебра ">Алгебра </option>
                <option value="Геометрия ">Геометрия </option>
                <option value="География">География</option>
                <option value="Труд">Труд</option>
                <option value="Биология">Биология</option>
                <option value="Физика">Физика</option>
                <option value="Русская литература">Русская литература</option>
                <option value="Русский язык">Русский язык</option>
                <option value="Белорусская литература">Белорусская литература</option>
                <option value="Белорусский язык">Белорусский язык</option>
                <option value="Физкультура">Физкультура</option>
                <option value="Информатика">Информатика</option>
                <option value="История Беларуси ">История Беларуси </option>
                <option value="Обществоведение">Обществоведение</option>
                <option value="ОМХК">ОМХК</option>
                <option value="Классный час">Классный час</option>
                <option value="ОБЖ">ОБЖ</option>
                <option value="Час здоровья">Час здоровья</option>
                <option value="(Ф) Физика ">(Ф) Физика </option>
                <option value="(Ф) ПАнглийский язык ">(Ф) ПАнглийский язык </option>
                <option value="(Ф) Английский Язык">(Ф) Английский Язык</option>
                <option value="(П1) Информатика ">(П1) Информатика </option>
                <option value="(П2) Информатика">(П2) Информатика</option>
                <option value="(П1) Англ. Яз.">(П1) Англ. Яз.</option>
                <option value="(П2) Англ. Яз.">(П2) Англ. Яз.</option>
                <option value="(М) Труд">(М) Труд</option>
                <option value="(Д) Труд">(Д) Труд</option>
                <option value="(ЕФ) Англ. Яз.">(ЕФ) Англ. Яз.</option>
                <option value="(ПФ) Англ. Яз.">(ПФ) Англ. Яз.</option>
            </select>
            <br>
            <select id="bdDay" name="day">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
            </select>
            <select id="bdMonth" name="month">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <select id="bdYear" name="year">
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
            <input type="submit" value="Добавить">
        </form>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/horizontalpage.js"></script>
<script src="js/pagechange.js"></script>
</html>