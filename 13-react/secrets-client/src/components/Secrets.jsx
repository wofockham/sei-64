import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json'; // Later: change this to the deployed URL (e.g. heroku)

const Secrets = () => {
    const [secrets, setSecrets] = useState([]);

    const fetchSecrets = () => {
        axios(SERVER_URL).then((response) => {
            setSecrets(response.data);
            setTimeout(fetchSecrets, 4000); // polling via recursion!
        });
    };

    // Here we use useEffect to run our AJAX request only once
    useEffect(fetchSecrets, []); // The empty array means "just run this once"

    const saveSecret = (content) => {
        axios.post(SERVER_URL, {content: content}).then((response) => {
            setSecrets([...secrets, response.data]); // Add the new secret to our state (which will trigger a re-render)
        });
    };

    return (
        <div>
            <h1>Tell us all your secrets</h1>
            <SecretForm onSubmit={ saveSecret } />
            <SecretsList secrets={ secrets } />
        </div>
    );
};

const SecretForm = (props) => {
    const [content, setContent] = useState('');
    const _handleInput = (e) => setContent(e.target.value);
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(content);
        setContent(''); // reset the content
    };
    return (
        <form onSubmit={ _handleSubmit }>
            <textarea onInput={ _handleInput } value={ content } required />
            <input type="submit" value="Tell" />
        </form>
    );
};

const SecretsList = (props) => {
    return (
        <div>
            { props.secrets.map( (s) => <p key={ s.id }>{ s.content }</p> ) }
        </div>
    );
};

export default Secrets;