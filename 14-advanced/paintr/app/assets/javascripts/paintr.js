$(document).ready(function () {
    $('#add-color').on('click', function () {
        const color = $('#color').val();
        const $swatch = $('<div />').addClass('swatch').css('background-color', color);
        $swatch.appendTo('.palette');
    });

    // Event delegation: listen for events on yet-to-be-created DOM elements
    $('.palette').on('click', '.swatch', function () {
        console.log('you clicked a swatch');
    });
});