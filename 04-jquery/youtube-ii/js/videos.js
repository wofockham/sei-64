// const $links = $('a'); // selector: get me something from the DOM

// for (let i = 0; i < $links.length; i++) {
//     const link = $links[i]; // vanilla DOM node
//     const $link = $(link); // jQuery version of the vanilla DOM node

//     const href = $link.attr('href'); // getter
//     const thumbnailURL = youtube.generateThumbnailUrl(href);

//     const $image = $('<img>'); // create this thing
//     $image.attr('src', thumbnailURL); // setter
//     $link.prepend($image);
// }

// v2: Straight up jQuery
// Goals: aim for this level:
$('a').each(function () {
    const href = $(this).attr('href');
    const thumbnailURL = youtube.generateThumbnailUrl(href);
    $('<img>').attr('src', thumbnailURL).prependTo(this); // chaining
});