import { Link, useNavigate } from 'react-router-dom';
import _ from 'underscore';

const Home = () => {
    const navigate = useNavigate();

    const _gotoRandomUser = () => {
        const students = ['SirDegrid', 'Rox-Liu', 'teoyouxun', 'JoshuaLingg', 'adam30202', '8york', 'ram-ram14', 'Mez117', 'DFloating', 'darcymansfield', 'btee9910', 'trstnb1998', 'stuartcannone', 'Griffy92', 'Yosiyas7', 'kaarenliangg', 'vworo', 'EdgarAllenExile', 'jordyborg', 'sambidrana', 'Whyyyyyy94', 'JoshuaSpicer'];
        const randomStudent = _(students).sample();
        navigate(`/profile/${ randomStudent }`); // Programmatic navigation
    };

    return (
        <div>
            <h1>Github Search</h1>
            <Link to="/search">
                <button>
                    Search for a user
                </button>
            </Link>

            <button onClick={ _gotoRandomUser }>
                Random user
            </button>
        </div>
    );
};

export default Home;