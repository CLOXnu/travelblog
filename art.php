<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="shortcut icon" type="image/x-icon" href="res/home/favicon32.ico">
    <link rel="icon" type="image/x-icon" href="res/home/favicon32.ico">
    <link rel="apple-touch-icon" sizes="57x57" href="res/home/favicon72.png">
    <link rel="apple-touch-icon" sizes="72x72" href="res/home/favicon57.png">
    <link rel="apple-touch-icon" sizes="114x114" href="res/home/favicon114.png">
    <link rel="apple-touch-icon" sizes="144x144" href="res/home/favicon144.png">

    <title>Travel & Life - 一只狗的火星旅行计划</title>

    <?php include "read/res.php";?>
    <style><?php include "css/font.css.php"?></style>
    <script src="read/res.js"></script>
    <script src="js/darkmode.js"></script>
    <script src="js/loading.js"></script>
    <script src="js/marked.min.js"></script>
    <script src="js/read.js"></script>
    <script src="js/cdnbutton.js"></script>
    <link rel="preload" href="<?php font("FZYanSJW")?>" as="font">
    <link rel="preload" href="<?php font("FZYanSJW_Cu")?>" as="font">
    <link rel="stylesheet" type="text/css" href="css/darkmode.css"/>
    <link rel="stylesheet" type="text/css" href="css/loading.css"/>
    <link rel="stylesheet" type="text/css" href="css/homebutton.css"/>
    <link rel="stylesheet" type="text/css" href="css/cdnbutton.css"/>
    <link rel="stylesheet" type="text/css" href="css/art.css"/>
    <link rel="stylesheet" type="text/css" href="css/typography.css"/>
    <link rel="stylesheet" type="text/css" href="css/cover.css"/>
    <link rel="stylesheet" type="text/css" href="css/foot.css"/>

    <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-analytics.js"></script>
    <script src="js/firebase.js"></script>
</head>
<body class="loading touch">
<script>document.body.classList.add(dark_mode_class_name);</script>

<?php include_once "template/homeButton.php"?>
<?php include_once "template/darkmodeButton.php"?>
<?php include_once "template/loading.php"?>
<span id="nav-shelter" onclick="nav_clicked()"></span>
<div id="nav-div">
    <p id="nav-title"></p>
    <a id="nav-a" onclick="nav_clicked()">
        <img id="nav-img" src="<?php art("down_triangle")?>"/>
    </a>
</div>
<div id="nav-list-div"></div>

<div id="head" class="dark-mode-on">
    <img src="" id="cover-img"/>
    <span id="cover-shadow"></span>
    <div id="head-text">
        <div id="title"></div>
        <div id="class"></div>
    </div>
</div>
<div id="info">
    <span id="story-date"></span>
    <?php include_once "template/cdnbutton.php"?>
    <div id="image-num-div" onclick="change_image_num()">
        <img id="image-num-img" src="<?php art("image");?>"/>
        <span id="image-num"></span>
    </div>
</div>
<!--<hr>-->
<div id="content"></div>
<div id="end">END</div>
<div id="associated-div" style="display: none">
    <p id="associated-title">还想再看看？</p>
    <div id="associated-blogs"></div>
</div>
<?php include_once "template/foot.php"?>

</body>

<script src="js/image_num.js"></script>
<script src="js/loading_transition.js"></script>
<script src="js/generate_blog_html.js"></script>
<script src="js/touch.js"></script>
<script src="js/add_title_link.js"></script>
<script src="js/art_nav.js"></script>
<script src="js/art.js"></script>
</html>