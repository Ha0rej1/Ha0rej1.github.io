<!DOCTYPE html>
<html lang="en">

<head>
    <?php require "head.php"; ?>
    <link rel="stylesheet" href="styles/avedrive.css">
</head>

<body>
<?php require_once "dockbar.php";?>
    <div id="background-wrapper"></div>
    <h1 id="project-header"><a class="pagechange header-text" href="index.php">Ave Diary</a></h1>
    <div class="animated homepage page-animation fadeInUp horizontal-page faster">
    <?php require "mainblock.php" ?>
    <?php require "avedrive.php" ?>
    </div>
    <div id="trash"><span class='material-icons'>delete</span><?php echo $strings['drive']['deleted']; ?></div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/deletefileblock.js"></script>
<script src="js/horizontalpage.js"></script>
<script src="js/pagechange.js"></script>
    <script src="js/icons.js"></script>
<script>
    $(".dochome").addClass("active");
</script>
</html>