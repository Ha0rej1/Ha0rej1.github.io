<!DOCTYPE html>
<html lang="en">

<head>
    <?php require "head.php"; ?>
    <link rel="stylesheet" href="styles/settings.css">
</head>

<body>

    <h1 id="project-header"><a class="pagechange" href="index.php"><i
        class="icon-arrow-back back animated animated-btns fadeIn faster"></i></a><a
    class="header-text pagechange" href="index.php">Ave Diary</a></h1>
    <?php require_once "dockbar.php";?>
    <div class="animated settingspage horizontal-page page-animation fadeInUp faster">
      <article class="block">
        <div class="settings">
          <h3><?php echo $strings['settings']['settings']?></h3>
          <figure class="profile">
          <figure class="profile-icon moderator">
              <i class="icon-person">
                  </i>
              </figure>
              <figure>
              <p class="profile-name">ha0rej1 Данченко Ростислав</p>
              <p class="profile-role">Модератор</p>
              </figure>
          </figure>
          <figure class="options">
          <figure class="token">
            <h4><?php echo $strings['settings']['token']?></h3>
            <span class="field">
              <span>s73asaf83asg7ag</span>
              <a class="copy" onclick="toast('Скопировано');"><?php echo $strings['settings']['copy']?></a>
            </span>
          </figure>
          <a class="option red" href="#"><?php echo $strings['settings']['signoutfromprofile']?></a>
          <a class="option red" href="#"><?php echo $strings['settings']['leaveclass']?></a>
          </figure>
      </div>
      </article>
      <article class="block bots" id="bots-field">
        <h3><?php echo $strings['settings']['connectedbots']?></h3>
        <figure class="bot">
          <figure class="bot-icon telegram-color">
            <i class="icon-telegram-plane"></i>
              </figure>
              <figure>
              <p class="bot-name">Telegram</p>
              </figure>
              <a class="deletebtn" data-botID="0" href="#">
              <i class="icon-trash">

            </i>
            </a>
          </figure>
          <figure class="bot">
            <figure class="bot-icon viber-color">
              <i class="icon-viber"></i>
                </figure>
                <figure>
                <p class="bot-name">Viber</p>
                </figure>
                <a class="deletebtn" data-botID="1" href="#">
              <i class="icon-trash">

            </i>
            </a>
            </figure>
            <figure class="bot">
              <figure class="bot-icon instagram-color">
                <i class="icon-instagram"></i>
                  </figure>
                  <figure>
                  <p class="bot-name">Instagram</p>
                  </figure>
                  <a class="deletebtn" data-botID="2" href="#">
              <i class="icon-trash">
            </i>
            </a>
              </figure>
      </article>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/horizontalpage.js"></script>
<script src="js/pagechange.js"></script>
<script src="js/deletebot.js"></script>
<script src="js/toast.js"></script>
<script>
    $(".docsettings").addClass("active");
</script>
</html>