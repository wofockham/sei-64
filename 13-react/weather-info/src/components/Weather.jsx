import { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = (city) => {
        console.log('Fetching', city);
        const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
        const weatherParams = {
          q: city,
          units: 'metric',
          appid: '87f3530b034ce83f07479771285f8bdf' // Thanks, random Github user
        };
    
        axios.get(weatherURL, {params: weatherParams}).then((result) => {
          // On success simply save the data we got back
          // NB: axios provides your data in result.data, not just result.
          // console.log( result ); // is useful here.
          setWeatherData(result.data);
        }, () => {
          // On failure we remove any old data and return to the starting value.
          setWeatherData(null);
        });
    };
    
    return (
        <div>
            <h1>Whether The Weather</h1>
            <SearchForm onSubmit={ fetchWeather } />
            <WeatherInfo data={ weatherData } />
        </div>
    );
};

const SearchForm = (props) => {
    const [query, setQuery] = useState('');

    const _handleInput = (e) => {
        setQuery(e.target.value);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query);
    }

    return (
        <form onSubmit={ _handleSubmit }>
            <input type="search" onInput={ _handleInput } required placeholder="Glasgow" />
            <input type="submit" value="Get weather" />
        </form>
    );
};

const WeatherInfo = (props) => {
    // Conditional rendering: we only show results once they're available.
    if (props && props.data === null) {
        return '';
    } else {
        return (
            <div>
                <h2>Weather for { props.data.name }</h2>
                <h3>Currently { props.data.main.temp }&deg;C</h3>
                <img src={`http://openweathermap.org/img/w/${ props.data.weather[0].icon }.png` } alt={props.data.weather[0].description} />
                <h4>{props.data.weather[0].main}: {props.data.weather[0].description}</h4>
            </div>
        );
    }
}

export default Weather;