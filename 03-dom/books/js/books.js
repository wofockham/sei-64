const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];

const ul = document.createElement('ul'); // detached DOM node

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const li = document.createElement('li'); // detached DOM node
    li.innerHTML = `${ book.title } by ${ book.author }`;

    if (book.alreadyRead) {
        li.className = 'already-read';
    }

    ul.appendChild( li );
}

document.body.appendChild(ul);
