$(document).ready(function () {
    // Parallax /////////////////////////////////////////////////////

    // Cacheing:
    const $kitty = $('.kitty-js'); // Save this object for future use.
    const $body = $('body');

    $(window).on('scroll', () => {
        const scrollTop = $(window).scrollTop();
        $kitty.css('background-position-y', scrollTop * -0.3); // experiment with the value you multiply by
        $body.css('background-position-y', scrollTop * 0.3);
    });

    // Bubbles //////////////////////////////////////////////////////
    $(window).on('mousemove', (e) => {
        const { pageX:x, pageY:y } = e; // Destructuring with renaming

        const size = Math.random() * 10; 

        const $bubble = $('<div class="bubble" />').css({
            left: x,
            top: y,
            height: size + 'em',
            width: size + 'em'
        });

        $bubble.appendTo('body');

        $bubble.animate({top: -200}, 3000, () => {
            $bubble.remove(); // clean up when we're done
        });
    });
});