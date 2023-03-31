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

const $ul = $('<ul />'); // detached jQuery object

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const $li = $(`<li>${ book.title } by ${ book.author }</li>`); // detached DOM node

    if (book.alreadyRead) {
        $li.addClass('already-read');
    }

    $li.appendTo($ul); // $ul.append($li);
}

$ul.appendTo('body');