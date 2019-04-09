var selectedCharacter = 'cornelius',
    defaultLevel = 60,
    userLevel = 60,
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
                targetElement = $('#' + selectedCharacter + ' .js-remaining-points'),
                targetElement2 = $('#' + selectedCharacter + ' span.js-level');
            if (enteredValue < (defaultLevel+1)) {
                userLevel = enteredValue;
                targetElement.html(userLevel);
                targetElement2.html(userLevel);
            } else {
                targetElement.html(defaultLevel);
                targetElement2.html(defaultLevel);
                $(this).val(defaultLevel);
            }
    });

    $('.js-reset').on('click', function() {
        $('#' + selectedCharacter + ' .js-remaining-points').html(defaultLevel);
        $('#' + selectedCharacter + ' .js-used-points').html(0);
        $('#' + selectedCharacter + ' .user-input.js-level').val(defaultLevel);
        $('#' + selectedCharacter + ' span.js-level').html(defaultLevel);
        $('#' + selectedCharacter + ' .js-slot').attr('data-points', 0).data('points', 0);
    });

    $('.is-active')
        .on('click', '.js-point-icon', function() {
            var self = $(this),
                parent = self.closest('.js-slot'),
                currentTree = self.closest('.js-tree-points'),
                currentTreePoints = currentTree.data('tree-points'),
                slotPoints = {
                    current: parent.data('points'),
                    entered: self.data('points')
                },
                usedPoints = $('#' + selectedCharacter + ' .js-used-points').html(),
                remainingPoints = {
                    current: $('#' + selectedCharacter + ' .js-remaining-points').html(),
                    new: 0,
                    element: $('#' + selectedCharacter + ' .js-remaining-points')
                };

            if(remainingPoints.current > slotPoints.entered) {
                if (slotPoints.current === slotPoints.entered) {
                    remainingPoints.new = 1 * remainingPoints.current + slotPoints.current;
                    parent.attr('data-points', 0).data('points', 0);
                    currentTreePoints = 1 * currentTreePoints - slotPoints.entered;
                } else {
                    remainingPoints.new = 1 * remainingPoints.current + (slotPoints.current - slotPoints.entered);
                    parent.attr('data-points', slotPoints.entered).data('points', slotPoints.entered);
                    currentTreePoints = 1 * currentTreePoints + (slotPoints.entered - slotPoints.current);
                }
                var activeTiers = Math.trunc(currentTreePoints/5) + 1;
                currentTree.attr('data-tree-points', currentTreePoints).data('tree-points', currentTreePoints);
                currentTree.attr('data-active-tiers', activeTiers).data('active-tiers', activeTiers);
                $('#' + selectedCharacter + ' .js-used-points').html(1 * userLevel - remainingPoints.new);
                $('#' + selectedCharacter + ' .js-remaining-points').html(remainingPoints.new);




            }


        // })
        // .on('click', '.js-skill-icon', function() {
        //     var self = $(this),
        //         parent = self.closest('.js-slot'),
        //         currentPoints = parent.data('points'),
        //         remainingPoints = $('#' + selectedCharacter + ' .js-remaining-points').html();

        //     if(remainingPoints > remainingPoints) {
        //         console.log(remainingPoints);
        //     }
        //     if (currentPoints < 5) {
        //         parent.data('points', currentPoints + 1).attr('data-points', currentPoints + 1);
        //     } else {
        //         parent.attr('data-points', 0).data('points', 0);
        //     }

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
