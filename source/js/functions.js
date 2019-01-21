var closestByClass = function(element, className) {
    while (element.className != className) {
        element = element.parentNode;
        if (!element) {
            return null;
        }
    }
    return element;
};
