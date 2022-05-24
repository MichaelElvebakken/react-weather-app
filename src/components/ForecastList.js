import React, { useEffect, useState } from 'react'
import ForecastTab from './ForecastTab'

const ForecastList = ({ timeseries }) => {
    const [forecastData, setforecastData] = useState([]);
    function createGroups(arr, numGroups) {
        const perGroup = Math.ceil(arr.length / numGroups);
        return new Array(numGroups)
          .fill('')
          .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
      }

    useEffect(() => {
        let temp_arr = [];
        for (let i = 0; i < timeseries.length; i++) {
            if ((parseInt(timeseries[i].time.split('T')[1].split(':')[0]) % 6) === 0) {
                temp_arr.push(timeseries[i]);
            }
        }
        if (temp_arr[0].time.split('T')[1].split(':')[0] === "06") {
            temp_arr.unshift('no_data');
        } else if (temp_arr[0].time.split('T')[1].split(':')[0] === "12") {
            temp_arr.unshift('no_data');
            temp_arr.unshift('no_data');

        } else if (temp_arr[0].time.split('T')[1].split(':')[0] === "18") {
            temp_arr.unshift('no_data');
            temp_arr.unshift('no_data');
            temp_arr.unshift('no_data');
        }
        setforecastData(createGroups(temp_arr.slice(0,28), 7));
        
    }, [timeseries]);

    useEffect(() => {

    }, [forecastData])
    return  (
        <div className="forecast-section">  
            <div className="forecast-headers">
            <p className="natt">Natt</p>
            <p className="morning">Morning</p>
            <p className="dag">dag</p>
            <p className="kveld">Kveld</p>
            </div>
            <div className="forecast-list" >
                {forecastData.map((data) => {
                    //Key is data[3].time because data[0], [1] and [2] might be "no data". So this is the safest option
                    return <ForecastTab timeseriesGroup={data} key={data[3].time}/>
                })}
            </div>
        </div>
    )
}

export default ForecastList