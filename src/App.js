import { useEffect, useState } from 'react';
import ForecastList from './components/ForecastList';
import Loading from './components/Loading';
import NowDisplay from './components/NowDisplay';
import './css/main.css'

function App() {
  const [weatherData, setweatherData] = useState();
  const [loading, setLoading] = useState(true);

  function geoError () {
    console.log("Showing position Oslo; couldn't fetch user position")
    fetchApi([59.9, 10.75]);
  }
  function geoSucess (pos) {
    fetchApi([pos.coords.latitude, pos.coords.longitude]);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoSucess, geoError);
  },[]);

    function fetchApi (position) {
    fetch(`https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${position[0]}&lon=${position[1]}`)
    .then(res => res.json())
    .then((res) => {
      setweatherData(res);
    })
  }

  useEffect(() => {
    if (weatherData !== undefined) {
      setLoading(false);
    }
  }, [weatherData]);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className='content'>
      <h1 className="heading">Været der du er</h1>

      <NowDisplay timeseries_now={weatherData.properties.timeseries[0]} />
      <ForecastList timeseries={weatherData.properties.timeseries}/>
    </div>
  );
}

export default App;
