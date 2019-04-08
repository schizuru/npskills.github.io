var html = '',
    characterList = document.getElementById('js-character-list'),
    skillList = document.getElementById('js-skill-list');
html = '';
characters.forEach(function(character) {
    var characterName = character.directory,
        directory = 'assets/img/' + characterName + '/';
    html += '<section class="character" id="' + characterName + '"  data-collapsed="true">';
    html +=     '<h2 class="character-name">' + character.name.en + '</h2>';
    html +=     '<a href="#" class="collapse js-collapse" data-target-element=".character"></a>';
    html +=     '<figure class="portrait"><img src="' + directory + characterName + '.png" alt=""></figure>';
    html +=     '<div class="skill-trees">';

    for (var i = 0; i < character.trees.length; i++) {
        html +=     '<div class="tree tree-' + (i+1) + '">';
        for (var k = 0; k < character.trees[i].tiers.length; k++) {
            html +=     '<div class="tier tier-' + (k+1) + '" data-collapsed="true">';
            html +=         '<a href="#" class="collapse js-collapse" data-target-element=".tier"></a>';
            for (var n = 0; n < character.trees[i].tiers[k].slots.length; n++) {
                var skill = {
                    slot: character.trees[i].tiers[k].slots[n].slot,
                    max: character.trees[i].tiers[k].slots[n].max,
                    calculation: character.trees[i].tiers[k].slots[n].calculation,
                    name: character.trees[i].tiers[k].slots[n].name.en,
                    description: character.trees[i].tiers[k].slots[n].description.en
                };
                html +=     '<div id="'+characterName+'-'+(i+1)+'-'+(k+1)+'-'+(n+1)+'" class="js-calculate">';
                    for (var c = 0; c < skill.calculation.length; c++) {
                        html += '<input data-index="'+skill.calculation[c].index+'" value="'+skill.calculation[c].parcent+'" type="hidden">';
                    }
                html +=     '</div>';
                var imagePath = directory + 'icons/tree' + (i+1) + '-tier' + (k+1) + '-slot' + skill.slot + '.png';
                html +=     '<div class="slot slot-' + skill.slot + ' js-slot" data-points="0">';
                html +=         '<h3 class="skill-name">' + skill.name + '</h3>';
                html +=         '<figure class="icon skill-icon js-skill-icon">';
                html +=             '<a href="#"><img src="' + imagePath + '" alt=""></a>';
                html +=         '</figure>';
                html +=         '<div class="actions">';
                html +=         '<div class="points">';
                    var index = 5;
                    for (var j = 0; j < skill.max; j++) {
                        html +=     '<a href="#" class="icon point-icon point-' + index + ' js-point-icon" data-point="' + index + '">';

                        html +=     '</a>';
                        index--;
                    }
                // html +=             '<a href="#" class="button plus">+</a>';
                // html +=             '<a href="#" class="button minus">-</a>';
                html +=         '</div>';
                html +=         '</div>';
                html +=         '<div class="skill-details js-details">';
                html +=             '<div class="skill-description">' + skill.description + '</div>';
                html +=         '</div>';
                html +=     '</div>';
            }
            html +=     '</div>';
        }
        html +=     '</div>';
    }
    html +=     '</div>';


    html +=     '<table class="data-table">';
    for (var i = 0; i < character.trees.length; i++) {
        for (var k = 0; k < character.trees[i].tiers.length; k++) {
            for (var n = 0; n < character.trees[i].tiers[k].slots.length; n++) {
                var skill = {
                    name: {
                        en: character.trees[i].tiers[k].slots[n].name.en,
                        jp: character.trees[i].tiers[k].slots[n].name.jp
                    },
                    description: {
                        en: character.trees[i].tiers[k].slots[n].description.en,
                        jp: character.trees[i].tiers[k].slots[n].description.jp
                    }
                };
                html += '<tr>';
                html +=     '<th class="index">';
                html +=         (i + 1) + '_' + (k + 1) + '_' + (n + 1);
                html +=     '</th>';
                html +=     '<th>';
                html +=             '<h3 class="skill-name">' + skill.name.jp + '</h3>';
                html +=         '<h3 class="skill-name">' + skill.name.en + '</h3>';
                html +=     '</th>';
                html +=     '<td>' + character.trees[i].tiers[k].slots[n].max + '</td>';
                html +=     '<td></td>';
                html +=     '<td>';
                html +=         '<div class="skill-description">' + skill.description.jp + '</div>';
                html +=         '<div class="skill-description">' + skill.description.en + '</div>';
                html +=     '</td>';
                html += '</tr>';
            }
        }
    }
    html +=     '</table>';
    html += '</section>';
});
characterList.innerHTML = html;

html = '';
skills.forEach(function(skill) {
    for(var i = 0; i < skill.types.length; i++) {
    html += '<tr>';
        html += '<td id="'+skill.types[i].index+'">' + skill.types[i].index + '</td>';
        html += '<td>';
        html += '</td>';
        html += '<td>';
            html += skill.types[i].name.en;
        html += '</td>';
    html += '</tr>';
    }
});
skillList.innerHTML = html;
// console.log(skills);
