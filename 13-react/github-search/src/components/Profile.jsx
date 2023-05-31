import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Github from '../services/github';

const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [userRepos, setUserRepos] = useState(null);

    const params = useParams();

    useEffect(() => {
        Github.getUserInfo(params.username).then((response) => setUserInfo(response.data));
        Github.getUserRepos(params.username).then((response) => setUserRepos(response.data));
    }, []);

    return (
        <div>
            <h2>Profile for { params.username }</h2>
            <div style={ {display: 'flex'} }>
                <UserInfo info={ userInfo } />
                <Repositories repos={ userRepos } />
            </div>
        </div>
    );
};

const UserInfo = (props) => {
    // conditional rendering
    if (props.info === null) {
        return (<div>Loading...</div>);
    }

    const { login, avatar_url, bio, followers, following, public_repos, public_gists } = props.info;
    return (
        <div>
            <h3>Stats for { login }</h3>
            <img src={ avatar_url } alt={ login } width="200" />
            <p>Bio: { bio }</p>
            <p>Followers: { followers }</p>
            <p>Following: { following }</p>
            <p>Public repos: { public_repos }</p>
            <p>Public gists: { public_gists }</p>
        </div>
    );
};

const Repositories = () => {
    return (
        <div>
            repositories coming soon
        </div>
    );
};

export default Profile;