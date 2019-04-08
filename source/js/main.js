var className = {
    active: 'is-active'
};

$(document).ready(function() {
    $('.js-tabs').on('click', '.tab', function() {
        var tab = $(this),
            targetElement = tab.data('target');
        tab.siblings().removeClass(className.active);
        $('.tab-pane').removeClass(className.active);
        tab.addClass('is-active');
        $(targetElement).addClass(className.active);
        console.log(targetElement);
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
