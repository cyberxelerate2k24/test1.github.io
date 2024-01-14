document.addEventListener("DOMContentLoaded", function () {
    var clickableElements = document.querySelectorAll('.clickable');

    clickableElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            var target = element.getAttribute('data-href');
            if (target.startsWith('mailto:')) {
                window.location.href = target;
            } else {
                window.open(target, '_blank');
            }
        });
    });
});
