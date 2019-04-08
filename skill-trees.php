<div class="skill-trees">
    <?php $tree_index = 1; ?>
    <?php foreach ($character['trees'] as $tree): ?>
        <div class="tree tree-<?= $tree_index ?>">
            <?php $tier_index = 1; ?>
            <?php foreach ($tree['tiers'] as $tier): ?>
                <div class="tier tier-<?= $tier_index ?>" data-collapsed="true">
                    <?php foreach ($tier['slots'] as $skill): ?>
                        <div class="slot slot-<?= $skill['slot'] ?> js-slot" data-points="0">
                            <h3 class="skill-name"><?= $skill['name']['en'] ?></h3>
                            <figure class="icon skill-icon js-skill-icon">
                                <a href="#">
                                    <img src="assets/img/<?= $character['directory'] ?>/icons/tree<?= $tree_index ?>-tier<?= $tier_index ?>-slot<?= $skill['slot'] ?>.png" alt="">
                                </a>
                            </figure>
                            <div class="actions">
                                <div class="points">
                                    <?php for ($i=5; $i > 0; $i--) { ?>
                                        <a href="#" class="icon point-icon point-<?= $i ?> js-point-icon" data-point="<?= $i ?>"></a>
                                    <?php } ?>
                                </div>
                            </div>
                            <div class="skill-details js-details">
                                <div class="skill-description"><?= $skill['description']['en'] ?></div>
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
