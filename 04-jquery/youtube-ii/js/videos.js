// Add a thumbnail to each link:
$('a').each(function () {
    const href = $(this).attr('href');
    const thumbnailURL = youtube.generateThumbnailUrl(href);
    $('<img>').attr('src', thumbnailURL).prependTo(this); // chaining
});

// Embed a video when the user clicks a link:
$('a').on('click', function (event) {
    event.preventDefault(); // Don't follow the link!

    const href = $(this).attr('href');
    const embedURL = youtube.generateEmbedUrl(href);
    
    const embedCode = `<iframe width="560" height="315" src="${ embedURL }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    $('#player').hide().html(embedCode).fadeIn(1500); // chaining
});