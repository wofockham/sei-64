import "./AboutMe.css";

const AboutMe = (props) => {
    return (
        <div>
            <h1>About Me</h1>
  
            <ul>
                <li className="listitem">Nickname: { props.nickname }</li>
                <li className="listitem">Favorites: { props.favourites }</li>
                <li className="listitem">Hometown: { props.hometown }</li>
            </ul>

            <img src="http://www.placekitten.com/120/200" />
        </div>
    );
};

export default AboutMe;