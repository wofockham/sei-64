const $button = $('#lib-button'); // a jQuery object

const makeMadLib = function () {
    const noun = $('#noun').val(); // just a string
    const adjective = $('#adjective').val();
    const name = $('#person').val();

    const story = `${ name } really likes ${ adjective } ${ noun }`;

    $('#story').html('<p>' + story + '</p>');
};

$button.on('click', makeMadLib);