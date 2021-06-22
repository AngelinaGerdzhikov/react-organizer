import React, { Fragment } from 'react';
import CalendarMonth from './../../../models/calendar/calendar-month';
import WeekList from './WeekList'

const MonthDetails: React.FC<{ month: CalendarMonth}> = (props) => {
  return (
      <Fragment>
        <WeekList month={props.month}/>
      </Fragment>
      
  )
}

export default MonthDetails;