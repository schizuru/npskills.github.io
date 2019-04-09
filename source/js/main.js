var className = {
    active: 'is-active',
    selected: 'is-selected'
};

$(document).ready(function() {

    $(document).on('click', 'a', function(event) {
        event.preventDefault();
    });

    $('.js-tabs').on('click', '.tab', function() {
        var self = $(this),
            targetElement = self.data('target');
        self.siblings().removeClass(className.selected);
        $('.tab-pane').removeClass(className.selected);
        self.addClass(className.selected);
        $(targetElement).addClass(className.selected);
        console.log(targetElement);
    });

    $('.js-level').on('click', function() {
        $(this).select();
    });

    $('.is-active .js-point-icon').on('click', function() {
        var self = $(this),
            parent = self.closest('.js-slot'),
            currentPoints = parent.data('points'),
            usedPoints = self.data('points');

        if (currentPoints === usedPoints) {
            parent.attr('data-points', 0).data('points', 0);
        } else {
            parent.attr('data-points', usedPoints).data('points', usedPoints);
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
