import { useAppSelector } from "../../../hooks/store-hooks";
import CalendarWeek from "../../../models/calendar/calendar-week";
import classes from "./DayList.module.css";
import DayListItem from "./DayListItem";

const DayList: React.FC<{ week: CalendarWeek }> = (props) => {
  const weeklyTasks = useAppSelector((state) =>
    state.tasks.present.tasks.filter((task) => {
      const taskDate = new Date(task.date);
      const taskMonth = taskDate.getMonth();
      const { firstDayOfWeek } = props.week;
      const lastDayOfWeek = props.week.days[6];

      const taskIsInYear = taskDate?.getFullYear() === firstDayOfWeek.year;
      const weekIsInSameMonth = firstDayOfWeek.month === lastDayOfWeek.month;
      const taskIsInFirstDayOfWeekMonth =
        taskIsInYear && taskMonth === firstDayOfWeek.month;
      const taskIsInSecondDayOfWeekMonth =
        taskIsInYear && taskMonth === lastDayOfWeek.month;

      if (
        weekIsInSameMonth &&
        taskIsInFirstDayOfWeekMonth &&
        taskDate.getDate() >= firstDayOfWeek.dayOfMonth &&
        taskDate.getDate() <= lastDayOfWeek.dayOfMonth
      ) {
        return task;
      }

      if (
        !weekIsInSameMonth &&
        taskIsInFirstDayOfWeekMonth &&
        taskDate.getDate() >= firstDayOfWeek.dayOfMonth
      ) {
        return task;
      }

      if (!weekIsInSameMonth && taskIsInSecondDayOfWeekMonth) {
        return task;
      }

      return null;
    })
  );

  return (
    <section>
      <ul className={classes.weekdays}>
        {props.week.days.map((day, dayIndex) => {
          const dailyTasks = weeklyTasks.filter((weeklyTask) => new Date(weeklyTask.date).getDay() === day.dayOfWeek);
          return (
            day && <DayListItem day={day} key={dayIndex} tasks={dailyTasks} />
          );
        })}
      </ul>
    </section>
  );
};

export default DayList;
