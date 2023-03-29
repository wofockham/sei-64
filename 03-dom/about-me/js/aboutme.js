// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif"; 

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const nickname = document.getElementById('nickname'); 
nickname.innerHTML = 'The Blade';

document.getElementById('favorites').innerHTML = '9, 11, 555';
document.getElementById('hometown').innerHTML = 'Sydney';

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
    const li = listItems[i];
    li.className = 'listitem';
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

const kitty = document.createElement('img'); // detached DOM node
kitty.src = 'http://placekitten.com/150/160';
document.body.appendChild(kitty); // attach the DOM node to the DOM