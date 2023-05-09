import { useState } from 'react';

const Secrets = () => {
    // TODO: This will be replaced by AJAX later
    const seedSecrets = [
        {id: 1, content: 'secret a'},
        {id: 2, content: 'secret b'},
        {id: 3, content: 'secret c'}
    ];

    const [secrets, setSecrets] = useState(seedSecrets);

    const saveSecret = (content) => {
        // TODO: this will be replaced by AJAX later
        const secret = {
            id: Math.random(), // HACK
            content: content
        };

        setSecrets([...secrets, secret]);
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