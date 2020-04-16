<!DOCTYPE html>
<html lang="en">

<head>
    <?php require "head.php"; ?>
    <link rel="stylesheet" href="styles/loadfile.css">
</head>

<body>
<?php require_once "dockbar.php";?>
    <h1 id="project-header"><a class="pagechange" href="index.php"><i
        class="icon-arrow-back back animated animated-btns fadeIn faster"></i></a><a class="pagechange header-text" href="index.php">Ave Diary</a></h1>
    <div class="animated page-animation fadeInUp faster">
        <form class="block loadfile">
            <div class="field"><p>organika.ppt</p></div>
            <input type="submit" value="Добавить">
        </form>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/horizontalpage.js"></script>
<script src="js/pagechange.js"></script>
</html>