var selectedCharacter = 'cornelius',
    className = {
    active: 'is-active',
    selected: 'is-selected'
};

$(document).ready(function() {

    $(document).on('click', 'a', function(event) {
        event.preventDefault();
    });

    $('.js-tabs').on('click', '.tab', function() {
        var self = $(this),
            selectedCharacter = self.data('target');
            targetElement = '#pane-' + selectedCharacter;
        self.siblings().removeClass(className.selected);
        $('.tab-pane').removeClass(className.selected);
        self.addClass(className.selected);
        $(targetElement).addClass(className.selected);
    });

    $('.js-level')
        .on('click', function() {
            $(this).select();
        })
        .on('keyup', function() {
            var enteredValue = $(this).val(),
                targetElement = $('#' + selectedCharacter + ' .js-remaining-points');
            if (enteredValue < 61) {
                targetElement.html(enteredValue);
            } else {
                targetElement.html(60);
                $(this).val(60);
            }
    });

    $('.js-reset').on('click', function() {
        $('#' + selectedCharacter + ' .js-remaining-points').html(60);
        $('#' + selectedCharacter + ' .js-level').val(60);
    });

    $('.is-active')
        .on('click', '.js-point-icon', function() {
            var self = $(this),
                parent = self.closest('.js-slot'),
                currentPoints = parent.data('points'),
                usedPoints = self.data('points'),
                remainingPoints = $('#' + selectedCharacter + ' .js-remaining-points').html();

            console.log(remainingPoints);
            if (currentPoints === usedPoints) {
                parent.attr('data-points', 0).data('points', 0);
            } else {
                parent.attr('data-points', usedPoints).data('points', usedPoints);
            }


        })
        .on('click', '.js-skill-icon', function() {
            var self = $(this),
                parent = self.closest('.js-slot'),
                currentPoints = parent.data('points'),
                remainingPoints = $('#' + selectedCharacter + ' .js-remaining-points').html();
                console.log(remainingPoints);
            if (currentPoints < 5) {
                parent.data('points', currentPoints + 1).attr('data-points', currentPoints + 1);
            } else {
                parent.attr('data-points', 0).data('points', 0);
            }

    });


});

// var className = 'is-hovered';
// var skillIcons = document.getElementsByClassName('js-skill-icon');
// for(var i = 0; i < skillIcons.length; i++) {
//     var element = skillIcons[i];
//     element.addEventListener('click', function(event) {
//         event = event || window.event;
//         event.preventDefault();
//         var target = event.target || event.srcElement,
//             targetElement = target.closest('.js-slot'),
//             activePoints = parseInt(targetElement.getAttribute('data-points'));
//         activePoints = (activePoints < 5) ? activePoints + 1 : 0;
//         targetElement.setAttribute('data-points', activePoints);
//     }, false);
//     element.addEventListener('mouseover', function(event) {
//         event.preventDefault();
//         event = event || window.event;
//         var target = event.target || event.srcElement,
//             targetElement = target.closest('.js-slot');
//         targetElement.classList.add(className);
//     }, false);
//     element.addEventListener('mouseleave', function(event) {
//         event.preventDefault();
//         event = event || window.event;
//         var target = event.target || event.srcElement,
//             targetElement = target.closest('.js-slot');
//         targetElement.classList.remove(className);
//     }, false);
// }

// var  pointIcons = document.getElementsByClassName('js-point-icon');
// for(var i = 0; i < skillIcons.length; i++) {
//     var element = pointIcons[i];
//     element.addEventListener('click', function(event) {
//         event.preventDefault();
//         event = event || window.event;
//         var target = event.target || event.srcElement,
//             targetElement = target.closest('.js-slot'),
//             activePoints = parseInt(target.getAttribute('data-index'));
//         targetElement.setAttribute('data-points', activePoints);
//     }, false);
// }

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
