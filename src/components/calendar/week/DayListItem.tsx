import { useAppSelector } from "../../../hooks/store-hooks";
import CalendarDay from "../../../models/calendar/calendar-day";
import TaskList from "../../tasks/TaskList";
import classes from "./DayListItem.module.css";

const DayListItem: React.FC<{ day: CalendarDay }> = (props) => {
  const { year, month, dayOfMonth, dayOfWeekFullName } = props.day;
  const dayTasks = useAppSelector(state => {
    const dayKey = `${year}${month}${dayOfMonth}`;
    const taskKeys = state.tasks.present.taskIdsPerDate[dayKey];
    return taskKeys && taskKeys.length > 0 && state.tasks.present.tasks.filter(task => taskKeys.includes(task.id) );    
  });

  return (
    <li key={dayOfMonth} className={classes.day}>
      <h3 className={`${classes.title} cursive`}>{dayOfWeekFullName}</h3>
      <span className={classes.date}>{dayOfMonth}</span>
      <TaskList
        tasks={dayTasks || []}
        year={year}
        month={month}
        dayOfMonth={dayOfMonth}
      />
    </li>
  );
};

export default DayListItem;
