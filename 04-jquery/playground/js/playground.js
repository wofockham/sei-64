$(document).ready(function () {
    $('#name').on('keyup', function () {
        const name = $(this).val();
        $('header h1').html('Welcome ' + name);
    }).on('focus', function () {
        $('header').addClass('active');
    }).on('blur', function () {
        $('header').removeClass('active');
    });

    $('#toggle').on('click', function () {
        $('img').fadeToggle(800);
    });

    $('#toggle').on('mousemove', function (event) {
        const randy = function (max=255) {
            return Math.round(Math.random() * max);
        };

        const color = `rgb(${ randy() }, ${ randy()}, ${ randy() })`;
        $(this).css('background-color', color);
    });
});
