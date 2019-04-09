<?php
$string = file_get_contents('source/json/characters.json');
$characters = json_decode($string, true);
$string = file_get_contents('source/json/spells.json');
$spells = json_decode($string, true);
$string = file_get_contents('source/json/skills.json');
$skills = json_decode($string, true);
$lang = 'en';
// $lang = 'jp';
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Test</title>
</head>
<body>
    <h1 class="page-title">Test</h1>

    <div class="loader">
        <div class="left"><span></span></div>
        <div class="right"><span></span></div>
    </div>

    <ul class="tabs js-tabs">
        <?php $index = 1; ?>
        <?php foreach ($characters as $character): ?>
            <?php $is_selected = ($index == 1) ? ' is-selected' : ''; ?>
            <li class="tab<?= $is_selected ?>" data-target="#pane-<?= $character['directory'] ?>">
                <?php
                $character_name = ($lang == 'en') ? $character['directory'] : $character['name'][$lang];
                ?>
                <a href="#">
                    <figure class="character-image"><img src="assets/img/<?= $character['directory'] ?>/<?= $character['directory'] ?>.png" alt=""></figure>
                    <?= $character_name ?>
                </a>
            </li>
            <?php $index++; ?>
        <?php endforeach ?>
    </ul>

    <div class="tab-content">
        <?php $index = 1; ?>
        <?php foreach ($characters as $character): ?>
            <?php $is_selected = ($index == 1) ? ' is-selected' : ''; ?>
            <div class="tab-pane<?= $is_selected ?>" id="pane-<?= $character['directory'] ?>">
                <section class="character" id="<?= $character['directory'] ?>"  data-collapsed="true">

                    <h2 class="character-name"><?= $character['name'][$lang] ?></h2>

                    <div class="points-control">
                        <label>
                            Current Level:
                            <input class="user-input js-level" type="text" value="60">
                        </label>
                    </div>

                    <?php
                    // $lang = 'jp';
                    // include 'status-skills.php';
                    // $lang = 'en';
                    // include 'status-spells.php';
                    ?>
                    <figure class="portrait"><img src="assets/img/<?= $character['directory'] ?>/<?= $character['directory'] ?>.png" alt=""></figure>

                    <div class="container container-trees">
                        <?php include 'skill-tree-list.php'; ?>
                    </div><!--
                     --><div class="container container-table">
                        <?php include 'skill-tree-table.php'; ?>
                    </div>

                </section>

            </div>
            <?php $index++; ?>
        <?php endforeach ?>
    </div>



    <script src="source/js/vendor/jQuery.js"></script>
    <script src="source/js/main.js"></script>
</body>
</html>
