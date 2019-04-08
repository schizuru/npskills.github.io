<table class="data-table">
    <tr>
        <?php foreach ($skills as $skill): ?>
            <th colspan="<?= sizeof($skill['list']) ?>">
                <?= $skill['category'][$lang] ?>
            </th>
        <?php endforeach ?>
    </tr>
    <tr>
        <?php foreach ($skills as $skill): ?>
            <?php foreach ($skill['list'] as $name): ?>
                <th><?= $name[$lang] ?></th>
            <?php endforeach ?>
        <?php endforeach ?>
    </tr>
    <tr>
        <?php foreach ($skills as $skill): ?>
            <?php foreach ($skill['list'] as $name): ?>
                <td>
                    +
                    <span class="current-status">0</span>
                    <div class="max">(<?= $name[$character['directory']] ?>)</div>
                </td>
            <?php endforeach ?>
        <?php endforeach ?>
    </tr>
</table>
