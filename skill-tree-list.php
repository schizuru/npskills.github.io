<div class="skill-trees">
    <div class="remaining-points">
        Remaining Points: <span class="js-remaining-points">60</span>
        <button class="button button-reset js-reset">Reset</button>
        <div class="used-points"><span class="js-used-points">0</span>/<span class="js-level">60</span></div>
    </div>
    <div class="inner-wrapper">
        <?php $tree_index = 1; ?>
        <?php foreach ($character['trees'] as $tree): ?>
            <div class="tree tree-<?= $tree_index ?> js-tree-points" data-tree-points="0" data-active-tiers="1">
                <?php $tier_index = 1; ?>
                <div class="tree-points">0</div>
                <?php foreach ($tree['tiers'] as $tier): ?>
                    <?php $is_active = ($tier_index == 1) ? ' is-active' : ''; ?>
                    <div class="tier tier-<?= $tier_index ?><?= $is_active ?>" data-tier-points="0">
                        <?php foreach ($tier['slots'] as $skill): ?>
                            <div class="slot slot-<?= $skill['slot'] ?> js-slot" data-points="0">
                                <h3 class="skill-name"><?= $skill['name'][$lang] ?></h3>
                                <figure class="icon skill-icon js-skill-icon">
                                    <a href="#">
                                        <img src="assets/img/<?= $character['directory'] ?>/icons/tree<?= $tree_index ?>-tier<?= $tier_index ?>-slot<?= $skill['slot'] ?>.png" alt="">
                                    </a>
                                </figure>
                                <div class="actions">
                                    <div class="points">
                                        <?php for ($i=$skill['max']; $i > 0; $i--) { ?>
                                            <a href="#" class="icon point-icon point-<?= $i ?> js-point-icon" data-points="<?= $i ?>"></a>
                                        <?php } ?>
                                    </div>
                                </div>
                                <div class="skill-details js-details">
                                    <div class="skill-description"><?= $skill['description'][$lang] ?></div>
                                </div>
                            </div>
                        <?php endforeach ?>
                    </div>
                    <?php $tier_index++; ?>
                <?php endforeach ?>
            </div>
            <?php $tree_index++; ?>
        <?php endforeach ?>
    </div>
</div>
