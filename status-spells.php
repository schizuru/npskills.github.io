<div class="spells">
    <table class="data-table">
        <tr>
            <th>Index</th>
            <th>Element</th>
            <th>Name</th>
            <th>Type</th>
            <th class="highlight"></th>
            <th>Base Power</th>
            <th>Charges</th>
            <th>Regen</th>
            <th>Description</th>
        </tr>
        <?php $index = 1; ?>
        <?php foreach ($spells as $spell): ?>
            <tr>
                <td><?= $index ?></td>
                <td>
                    <div class="spell-element"><?= $spell['element'][$lang] ?></div>
                </td>
                <td>
                    <div class="spell-name"><?= $spell['name'][$lang] ?></div>
                </td>
                <td>
                    <div class="spell-type"><?= $spell['type'][$lang] ?></div>
                </td>
                <td class="highlight">/?</td>
                <td><?= $spell['basePower'] ?></td>
                <td><?= $spell['charges'] ?></td>
                <td><?= $spell['regen'] ?></td>
                <td><?= $spell['description'][$lang] ?></td>
            </tr>
            <?php $index++; ?>
        <?php endforeach ?>
    </table>
</div>
