import React from 'react'

const ForecastTab = ({ timeseriesGroup }) => {
  return (
    <li className="forecast-tab">
        <div className="forecast-details">
            <p className="day">{timeseriesGroup[3].time.split('T')[0]}</p>
            <div className="temperature" style={{fontSize: "1rem"}}>
                <img src="/assets/images/temp_icon.png" alt="temperature icon" />
                <p>{timeseriesGroup[2].data ? timeseriesGroup[2].data.next_6_hours.details.air_temperature_min : timeseriesGroup[3].data.next_6_hours.details.air_temperature_min}°/{timeseriesGroup[2].data ? timeseriesGroup[2].data.next_6_hours.details.air_temperature_max : timeseriesGroup[3].data.next_6_hours.details.air_temperature_max}°</p>
            </div>
            <div className='rain'>
                <img src="/assets/images/drop_icon.png" alt="rain icon"/>
                <p>{timeseriesGroup[2].data ? timeseriesGroup[2].data.next_6_hours.details.precipitation_amount_min : timeseriesGroup[3].data.next_6_hours.details.precipitation_amount_min}/{timeseriesGroup[2].data ? timeseriesGroup[2].data.next_6_hours.details.precipitation_amount_max : timeseriesGroup[3].data.next_6_hours.details.precipitation_amount_max}mm</p>
            </div>
            <div className="wind">
                <img src="/assets/images/wind_icon.png" alt="wind icon"/>
                <p>{timeseriesGroup[2].data ? timeseriesGroup[2].data.instant.details.wind_speed : timeseriesGroup[3].data.instant.details.wind_speed}m/s</p>
            </div>
        </div>
        <div className="symbols">
            
        <img src={timeseriesGroup[0].data ? `assets/weather_png/${timeseriesGroup[0].data.next_6_hours.summary.symbol_code}.png` : ''} alt="weather symbol" style={{fontSize: '0'}}/>
        <img src={timeseriesGroup[1].data ? `assets/weather_png/${timeseriesGroup[1].data.next_6_hours.summary.symbol_code}.png` : ''} alt="weather symbol" style={{fontSize: '0'}}/>
        <img src={timeseriesGroup[2].data ? `assets/weather_png/${timeseriesGroup[2].data.next_6_hours.summary.symbol_code}.png` : ''} alt="weather symbol" style={{fontSize: '0'}}/>
        <img src={timeseriesGroup[3].data ? `assets/weather_png/${timeseriesGroup[3].data.next_6_hours.summary.symbol_code}.png` : ''} alt="weather symbol" style={{fontSize: '0'}}/>





        </div>


    </li>
  )
}

export default ForecastTab