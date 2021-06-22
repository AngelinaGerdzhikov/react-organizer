import classes from "./WeekList.module.css";

import CalendarMonth from "../../../models/calendar/calendar-month";
import WeekListItem from "./WeekListItem";
import React from "react";

const WeekList: React.FC<{ month: CalendarMonth }> = (props) => {
  return (
    <React.Fragment>
      <nav className={classes["days-of-week"]}>
        <ul>
          <li>Monday</li>
          <li>Tueday</li>
          <li>Wednsday</li>
          <li>Thursday</li>
          <li>Friday</li>
          <li>Saturday</li>
          <li>Sunday</li>
        </ul>
      </nav>
      <section className={classes.month}>
        <ul className={classes["month-weeks"]}>
          {props.month.monthDatesInWeeks.map((week, weekIndex) => {
            const firstDayOfWeekOffset =
              week.firstDayOfWeek === 0
                ? 6 * 122
                : (week.firstDayOfWeek - 1) * 122;

            return (
              <li key={weekIndex}>
                <WeekListItem
                  week={week}
                  offset={weekIndex === 0 ? firstDayOfWeekOffset : 0}
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
