
var html = '';
var characterList = document.getElementById('js-character-list');
var skillList = document.getElementById('js-skill-list');

skills.forEach(function(skill) {
    html +=     '<div class="data-table"></div>';
});
skillList.innerHTML = html;


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
                    name: character.trees[i].tiers[k].slots[n].name.en,
                    description: character.trees[i].tiers[k].slots[n].description.en
                };
                var imagePath = directory + 'icons/tree' + (i+1) + '-tier' + (k+1) + '-slot' + skill.slot + '.png';
                html +=     '<div class="slot slot-' + skill.slot + ' js-slot" data-active-points="0">';
                html +=         '<h3 class="skill-name">' + skill.name + '</h3>';
                html +=         '<figure class="icon skill-icon js-skill-icon">';
                html +=             '<a href="#"><img src="' + imagePath + '" alt=""></a>';
                html +=         '</figure>';
                html +=         '<div class="actions">';
                html +=         '<div class="points">';
                    var index = 5;
                    for (var j = 0; j < skill.max; j++) {
                        html +=     '<a href="#" class="icon point-icon point-' + index + ' js-point-icon" data-index="' + index + '"></a>';
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
var className = 'is-hovered';
var skillIcons = document.getElementsByClassName('js-skill-icon');
// is-hovered
for(var i = 0; i < skillIcons.length; i++) {
    var element = skillIcons[i];
    element.addEventListener('click', function(event) {
        event = event || window.event;
        event.preventDefault();
        var target = event.target || event.srcElement,
            targetElement = target.closest('.js-slot'),
            activePoints = parseInt(targetElement.getAttribute('data-active-points'));
        activePoints = (activePoints < 5) ? activePoints + 1 : 0;
        targetElement.setAttribute('data-active-points', activePoints);
    }, false);
    element.addEventListener('mouseover', function(event) {
        event.preventDefault();
        event = event || window.event;
        var target = event.target || event.srcElement,
            targetElement = target.closest('.js-slot');
        targetElement.classList.add(className);
    }, false);
    element.addEventListener('mouseleave', function(event) {
        event.preventDefault();
        event = event || window.event;
        var target = event.target || event.srcElement,
            targetElement = target.closest('.js-slot');
        targetElement.classList.remove(className);
    }, false);
}

var  pointIcons = document.getElementsByClassName('js-point-icon');
for(var i = 0; i < skillIcons.length; i++) {
    var element = pointIcons[i];
    element.addEventListener('click', function(event) {
        event.preventDefault();
        event = event || window.event;
        var target = event.target || event.srcElement,
            targetElement = target.closest('.js-slot'),
            activePoints = parseInt(target.getAttribute('data-index'));
        targetElement.setAttribute('data-active-points', activePoints);
    }, false);
}

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
