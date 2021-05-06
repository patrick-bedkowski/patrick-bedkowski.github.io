document.querySelectorAll('.kontakt-block').forEach(function (block) {
    block.addEventListener('mouseenter', changeText);
    block.addEventListener('mouseleave', defaultText);
});

function changeText(e) {
    var $span = $(e.target).find('.text-display')
        .fadeOut('slow', function () {
            $span.text(e.target.dataset.hoverValue).fadeIn(400);
        });
}

function defaultText(e) {
    var $span = $(e.target).find('.text-display')
        .fadeOut('slow', function () {
            $span.text(e.target.dataset.defaultValue).fadeIn(400);
        });
}