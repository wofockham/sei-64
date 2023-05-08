import { useState } from 'react';

const SearchForm = (props) => {
    const [query, setQuery] = useState(''); 

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(query); // the child communicates the search term back up to the parent.
    };

    const _handleInput = (event) => {
        setQuery(event.target.value);
    };

    return (
        <form onSubmit={ _handleSubmit }>
            <input type="search" required autoFocus placeholder="butterfly" onInput={ _handleInput } />
            <input type="submit" value={ `Search for ${ query }` } />
        </form>
    );
};

export default SearchForm;