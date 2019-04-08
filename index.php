<?php
$string = file_get_contents('source/json/characters.json');
$characters = json_decode($string, true);
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

    <label>Current Level
        <input type="text" value="60">
    </label>
    <div>Remaining Points: 60</div>

    <ul class="tabs">
        <?php $index = 1; ?>
        <?php foreach ($characters as $character): ?>
            <?php $is_active = ($index == 1) ? 'is-active' : ''; ?>
            <li class="<?= $is_active ?>"><a href="#"><?= $character['directory'] ?></a></li>
            <?php $index++; ?>
        <?php endforeach ?>
    </ul>
    <?php $index = 1; ?>
    <?php foreach ($characters as $character): ?>
        <?php $is_active = ($index == 1) ? ' is-active' : ''; ?>
        <div class="tab-content">
            <div class="tab-pane<?= $is_active ?>">
                <section class="character" id="<?= $character['directory'] ?>"  data-collapsed="true">
                    <h2 class="character-name"><?= $character['name']['en'] ?></h2>
                    <!-- <a href="#" class="collapse js-collapse" data-target-element=".character"></a> -->
                    <figure class="portrait"><img src="assets/img/<?= $character['directory'] ?>/<?= $character['directory'] ?>.png" alt=""></figure>

                    <div class="container container-trees">
                        <?php include 'skill-trees.php'; ?>
                    </div>
                    <div class="container container-table">
                        <?php include 'skill-table.php'; ?>
                    </div>

                </section>
            </div>
        </div>
        <?php $index++; ?>
    <?php endforeach ?>

    <script src="assets/js/script.js"></script>
</body>
</html>
