import classes from "./WeekList.module.css";

import CalendarMonth from "../../../models/calendar/calendar-month";
import WeekListItem from "./WeekListItem";
import React from "react";

const WeekList: React.FC<{ month: CalendarMonth }> = (props) => {
  return (
    <React.Fragment>
      <nav className={classes["days-of-week"]}>
        <ul>
          <li>Sunday</li>
          <li>Monday</li>
          <li>Tueday</li>
          <li>Wednsday</li>
          <li>Thursday</li>
          <li>Friday</li>
          <li>Saturday</li>
        </ul>
      </nav>
      <section className={classes.month}>
        <ul className={classes["month-weeks"]}>
          {props.month.monthDatesInWeeks.map((week, weekIndex) => {
            // const firstDayOfWeekOffset = week.firstDayOfWeekNumber * 122;

            return (
              <li key={weekIndex}>
                <WeekListItem
                  week={week}
                  // offset={weekIndex === 0 ? firstDayOfWeekOffset : 0}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default WeekList;
