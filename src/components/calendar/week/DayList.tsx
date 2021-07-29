import { useAppSelector } from "../../../hooks/store-hooks";
import CalendarWeek from "../../../models/calendar/calendar-week";
import classes from "./DayList.module.css";
import DayListItem from "./DayListItem";

const DayList: React.FC<{ week: CalendarWeek }> = (props) => {
  const weeklyTasks = useAppSelector(state => state.tasks.tasks.filter(task => {
    const taskDate = new Date(task.date);
    const { firstDayOfWeek } = props.week;
    const lastDayOfWeek = props.week.days[6];
  
    if (
      (taskDate?.getFullYear() === firstDayOfWeek.year) && 
      (taskDate?.getMonth() === firstDayOfWeek.month || taskDate.getMonth() === lastDayOfWeek.month) &&
      (taskDate?.getDate() >= firstDayOfWeek.dayOfMonth && taskDate.getDate() <= lastDayOfWeek.dayOfMonth)
    ) { return task; }

    return null;
  }));

  return (
    <section>
      <ul className={classes.weekdays}>
        {props.week.days.map((day, dayIndex) => {
          const dailyTasks = weeklyTasks.filter(weeklyTask => new Date(weeklyTask.date).getDay() === day.dayOfWeek);
          return day && <DayListItem day={day} key={dayIndex} tasks={dailyTasks}/>          
        })}
      </ul>
    </section>
  );
};

export default DayList;
