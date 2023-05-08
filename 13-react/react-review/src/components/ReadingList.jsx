import "./ReadingList.css";

const ReadingList = (props) => {
    return (
        <div>
            <ul>
                { props.books.map((book) => <li className={ book.alreadyRead && 'already-read' }>{ book.title } by { book.author }</li>) }
            </ul>
        </div>
    );
};

export default ReadingList;