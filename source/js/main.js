var html = '';
var characterList = document.getElementById('js-character-list');

characters.forEach(function(character) {
    var characterName = character.name.en.toLowerCase(),
        baseImagePath = 'assets/img/' + characterName + '/';
    html += '<section class="character" id="' + characterName + '"  data-collapsed="true">';
    html +=     '<h2 class="character-name">' + character.name.jp + '</h2>';
    html +=     '<a href="#" class="collapse js-collapse" data-target-element=".character"></a>';
    html +=     '<figure class="portrait"><img src="' + baseImagePath + characterName + '.png" alt=""></figure>';
    html +=     '<div class="skill-trees">';

    for (var i = 0; i < character.trees.length; i++) {
        html +=     '<div class="tree tree-' + (i+1) + '">';

        for (var k = 0; k < character.trees[i].tiers.length; k++) {
            html +=     '<div class="tier tier-' + (k+1) + '" data-collapsed="true">';
            html +=         '<a href="#" class="collapse js-collapse" data-target-element=".tier"></a>';

            for (var n = 0; n < character.trees[i].tiers[k].slots.length; n++) {
                var skill = {
                    slot: character.trees[i].tiers[k].slots[n].slot,
                    name: character.trees[i].tiers[k].slots[n].name.jp,
                    description: character.trees[i].tiers[k].slots[n].description.jp
                };
                var imagePath = baseImagePath + 'icons/tree' + (i+1) + '-tier' + (k+1) + '-slot' + skill.slot + '.png';
                html +=     '<div class="slot slot-' + skill.slot + '">';
                html +=         '<figure class="skill-icon">';
                html +=             '<img src="' + imagePath + '" alt="">';
                html +=         '</figure>';
                html +=         '<div class="actions">';
                html +=             '<a href="#" class="button plus">+</a>';
                html +=             '<a href="#" class="button minus">-</a>';
                html +=         '</div>';
                html +=         '<div class="skill-details js-details">';
                html +=             '<h3 class="skill-name">' + skill.name + '</h3>';
                html +=             '<div class="skill-description">' + skill.description + '</div>';
                html +=         '</div>';
                html +=     '</div>';
            }

            html +=     '</div>';
        }

        html +=     '</div>';
    }

    html +=     '</div>';
    html += '</section>';
});

characterList.innerHTML = html;


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
//     html +=     '<td>' + skill.name.jp + '</td>';
//     html +=     '<td>' + skill.description.jp + '</td>';
//     html += '</tr>';
// });

// dataTable.innerHTML = html;
