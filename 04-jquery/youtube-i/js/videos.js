const links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const href = link.getAttribute('href'); // link.href;
    const thumbnailURL = youtube.generateThumbnailUrl(href);

    const image = document.createElement('img'); // detached DOM node
    image.setAttribute('src', thumbnailURL);
    link.appendChild(image);
}
