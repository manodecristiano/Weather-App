import React from 'react';
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';
import styles from './UpcomingDaysForecast.module.css';

const UpcomingDaysForecast = ({ days }) => (
<ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
  {days.map(day => (
     <UpcomingDaysForecastItem {...day} key={day.weekday}/>
   ))}
</ul>
); 
export default UpcomingDaysForecast;
