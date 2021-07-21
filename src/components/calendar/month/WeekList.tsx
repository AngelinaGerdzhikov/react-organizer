import classes from "./WeekList.module.css";

import CalendarMonth from "../../../models/calendar/calendar-month";
import WeekListItem from "./WeekListItem";
import React from "react";

const WeekList: React.FC<{ month: CalendarMonth }> = (props) => {
  return (
    <article className={classes['month-details']}>
      <nav className={classes["days-of-week"]}>
        <ul>
          <li><h3>Sunday</h3></li>
          <li><h3>Monday</h3></li>
          <li><h3>Tueday</h3></li>
          <li><h3>Wednsday</h3></li>
          <li><h3>Thursday</h3></li>
          <li><h3>Friday</h3></li>
          <li><h3>Saturday</h3></li>
        </ul>
      </nav>
      <section className={classes.month}>
        <ul className={classes["month-weeks"]}>
          {props.month.monthDatesInWeeks.map((week, weekIndex) => {

            return (
              <li key={weekIndex}>
                <WeekListItem
                  week={week}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default WeekList;
