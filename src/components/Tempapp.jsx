import React, { useState, useEffect } from 'react';
import "./css/index.css";
function Tempapp() {
    const [city, setcity] = useState(null);
    const [weather, setweather] = useState(null);
    const [cord, newcord] = useState(null);
    const [search, setsearch] = useState("Kaithal");
    

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8da5aa145848630aee5c8e84b4ce8295`;
            const response = await fetch(url);
            const resjson = await response.json();
            console.log(resjson);
            setcity(resjson.main);
            setweather(resjson.weather);
            newcord(resjson.coord);
        }


        fetchApi();
    }, [search])
    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input
                        type="search"
                        value={search}
                        className='inputField'
                        placeholder='Search'
                        onChange={(event) => {
                            setsearch(event.target.value)
                        }} />
                </div>
                {
                    !city ? (
                        <p id='p1'>No Data Found</p>
                    ) : (
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>&nbsp;{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°C
                            </h1>
                            <h3 className="tempmin_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                            <h3>Weather : {weather[0].main}</h3>
                            <h3>Latitude : {cord.lat} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Longitude: {cord.lon}</h3>
                        </div>
                    )
                }

            </div>

        </>
    );
}

export default Tempapp;

