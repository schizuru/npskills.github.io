<table class="data-table">
    <tr>
        <th>Index</th>
        <th>Name</th>
        <th></th>
        <th>Max</th>
        <th>Description</th>
    </tr>
    <?php $tree_index = 1; ?>
    <?php foreach ($character['trees'] as $tree): ?>
        <?php $tier_index = 1; ?>
        <?php foreach ($tree['tiers'] as $tier): ?>
            <?php foreach ($tier['slots'] as $skill): ?>
                <tr>
                    <th class="index">
                        <?=  $tree_index ?>_<?=  $tier_index ?>_<?=  $skill['slot'] ?>
                    </th>
                    <th>
                        <h3 class="skill-name"><?= $skill['name'][$lang] ?></h3>
                    </th>
                    <td></td>
                    <td><?= $skill['max'] ?></td>
                    <td>
                        <div class="skill-description"><?= $skill['description'][$lang] ?></div>
                    </td>
                </tr>
            <?php endforeach ?>
            <?php $tier_index++; ?>
        <?php endforeach ?>
        <?php $tree_index++; ?>
    <?php endforeach ?>
</table>
