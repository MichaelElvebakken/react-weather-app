import React from 'react'

const NowDisplay = ({ timeseries_now }) => {
  return (
    <div className="now-display" style={{marginBottom: "5rem"}}>
        <div className="now-dispay__main-details">
            
            <img src={`/assets/weather_png/${timeseries_now.data.next_1_hours.summary.symbol_code}.png`} alt="clearsky day" className="forecast-image" />
            <div className="temperature" >
                <img src="/assets/images/temp_icon.png" alt="temperature" />
                <p>{timeseries_now.data.instant.details.air_temperature}℃</p>
            </div>
            <div className='rain'>
                <img src="/assets/images/drop_icon.png" alt="rain"/>
                <p>{timeseries_now.data.next_1_hours.details.precipitation_amount_max}mm</p>
            </div>
            <div className='wind'>
                <img src="/assets/images/wind_icon.png" alt="wind"/>
                <p>{timeseries_now.data.instant.details.wind_speed}m/s</p>
            </div>
        </div>
        <div className="now-display__spesific-details">
            <h2>Spesifikasjoner</h2>
            <ul>
                <li>vind: {timeseries_now.data.instant.details.wind_speed}m/s</li>
                <li>vindkast: {timeseries_now.data.instant.details.wind_speed_of_gust}m/s</li>
                <li>Fra retning: {Math.round(timeseries_now.data.instant.details.wind_from_direction)}</li>
                <li>soloppgang: 6:00</li>
                <li>solnedgang: 18:00</li>
            </ul>
            
        </div>
    </div>
  )
}

export default NowDisplay