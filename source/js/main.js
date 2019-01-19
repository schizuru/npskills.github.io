var html = '';
var characterList = document.getElementById('js-character-list');

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
                    name: character.trees[i].tiers[k].slots[n].name.en,
                    description: character.trees[i].tiers[k].slots[n].description.en
                };
                var imagePath = directory + 'icons/tree' + (i+1) + '-tier' + (k+1) + '-slot' + skill.slot + '.png';
                html +=     '<div class="slot slot-' + skill.slot + '">';
                html +=         '<h3 class="skill-name">' + skill.name + '</h3>';
                html +=         '<figure class="icon js-icon">';
                html +=             '<a href="#"><img src="' + imagePath + '" alt=""></a>';
                html +=         '</figure>';
                html +=         '<div class="actions">';
                html +=         '<div class="points" data-active-points="0">';
                    for (var j = 0; j < skill.max; j++) {
                        html +=     '<a href="#" class="point js-point"></a>';
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
                html +=     '<tr>';
                html +=         '<th>';
                html +=             '<h3 class="skill-name">' + skill.name.en + '</h3>';
                html +=             '<h3 class="skill-name">' + skill.name.jp + '</h3>';
                html +=         '</th>';
                html +=         '<td>';
                html +=             '<div class="skill-description">' + skill.description.en + '</div>';
                html +=             '<div class="skill-description">' + skill.description.jp + '</div>';
                html +=         '</td>';
                html +=     '</tr>';
            }
        }
    }
    html +=     '</table>';
    html += '</section>';
});
characterList.innerHTML = html;


var skillIcons = document.getElementsByClassName('js-icon');
for(var i = 0; i < skillIcons.length; i++) {
    var element = skillIcons[i];
    element.onclick = function(event) {
        event.preventDefault();
        console.log('test');

    };
}


// check if language is jp or en
// characters.forEach(function(character) {
//     var characterName = character.name.en.toLowerCase(),
//         baseImagePath = 'assets/img/' + characterName + '/';
//     html += '<section class="character" id="' + characterName + '"  data-collapsed="true">';
//     html +=     '<h2 class="character-name">' + character.name.en + '</h2>';
//     html +=     '<a href="#" class="collapse js-collapse" data-target-element=".character"></a>';
//     html +=     '<figure class="portrait"><img src="' + baseImagePath + characterName + '.png" alt=""></figure>';
//     html +=     '<div class="skill-trees">';

//     for (var i = 0; i < character.trees.length; i++) {
//         html +=     '<div class="tree tree-' + (i+1) + '">';

//         for (var k = 0; k < character.trees[i].tiers.length; k++) {
//             html +=     '<div class="tier tier-' + (k+1) + '" data-collapsed="true">';
//             html +=         '<a href="#" class="collapse js-collapse" data-target-element=".tier"></a>';

//             for (var n = 0; n < character.trees[i].tiers[k].slots.length; n++) {
//                 var skill = {
//                     slot: character.trees[i].tiers[k].slots[n].slot,
//                     name: character.trees[i].tiers[k].slots[n].name.en,
//                     description: character.trees[i].tiers[k].slots[n].description.en
//                 };
//                 var imagePath = baseImagePath + 'icons/tree' + (i+1) + '-tier' + (k+1) + '-slot' + skill.slot + '.png';
//                 html +=     '<div class="slot slot-' + skill.slot + '">';
//                 html +=         '<figure class="icon">';
//                 html +=             '<img src="' + imagePath + '" alt="">';
//                 html +=         '</figure>';
//                 html +=         '<div class="actions">';
//                 html +=             '<a href="#" class="button plus">+</a>';
//                 html +=             '<a href="#" class="button minus">-</a>';
//                 html +=         '</div>';
//                 html +=         '<div class="skill-details js-details">';
//                 html +=             '<h3 class="skill-name">' + skill.name + '</h3>';
//                 html +=             '<div class="skill-description">' + skill.description + '</div>';
//                 html +=         '</div>';
//                 html +=     '</div>';
//             }

//             html +=     '</div>';
//         }

//         html +=     '</div>';
//     }

//     html +=     '</div>';
//     html += '</section>';
// });

// characterList.innerHTML = html;


// var collapseIcons = document.getElementsByClassName('js-collapse');
// for(var i = 0; i < collapseIcons.length; i++) {
//     var element = collapseIcons[i];
//     element.onclick = function(event) {
//         event.preventDefault();
//         // var targetElement = this.dataset.targetElement;
//         // find parent targetElement
//         // toggle data-collapsed T/F
//         // console.log(targetElement);
//     };
// }

// var characterList = document.getElementsByClassName('js-character-list');
// html = '';
// var hasImage = false;

// for (var i = 1; i <= 3; i++) {
//     html += '<div class="tree tree-' + i +'">'
//         for (var k = 1; k <= 5; k++) {
//             html += '<div class="tier tier-' + k +'">'
//                 for (var n = 1; n <= 3; n+) {
//                     html += '<div class="slot slot-' + n +'">'
//                     html += '<img src="" alt="">'
//                     html += '</div>'
//                 }
//             html += '</div>'
//         }
//     html += '</div>'
// }

// characters.forEach(function(character) {
//     html += '<li>'
//     html +=     '<a href="#">' + (character) + '</a>'
//     html += '</li>'
// });

// characterList.innerHTML = html;






// var dataTable = document.getElementById('js-skill-list');
// html = '';
// cornelius.skills.forEach(function(skill, index) {
//     html += '<tr>';
//     html +=     '<td class="index">' + (index+1) + '</td>';
//     html +=     '<td>' + skill.name.en + '</td>';
//     html +=     '<td>' + skill.description.en + '</td>';
//     html += '</tr>';
// });

// dataTable.innerHTML = html;
