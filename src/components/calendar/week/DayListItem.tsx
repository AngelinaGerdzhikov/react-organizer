import { useAppDispatch, useAppSelector } from "../../../store/hooks/store-hooks";
import CalendarDay from "../../../models/calendar/calendar-day";
import TaskList from "../../tasks/TaskList";
import classes from "./DayListItem.module.css";
import { useEffect } from "react";
import { fetchTasksAsync } from "../../../store/task-thunks";

const DayListItem: React.FC<{ day: CalendarDay }> = (props) => {
  const { year, month, dayOfMonth, dayOfWeekFullName } = props.day;
  const newTasks = useAppSelector(state => state.tasks.present.newTasks);
  const dispatch = useAppDispatch();
  // const dayTasks = useAppSelector(state => {
  //   const dayKey = `${year}${month}${dayOfMonth}`;
  //   const taskKeys = state.tasks.present.taskIdsPerDate[dayKey];
  //   return taskKeys && taskKeys.length > 0 && state.tasks.present.tasks.filter(task => taskKeys.includes(task.id) );    
  // });

  useEffect(() => {
    dispatch(fetchTasksAsync());
  }, [dispatch]);

  return (
    <li key={dayOfMonth} className={classes.day}>
      <h3 className={`${classes.title} cursive`}>{dayOfWeekFullName}</h3>
      {/* <h5>{strings[0]}, {strings[1]}</h5> */}
      {/* {newTasks && newTasks.map(newTask => <div>{newTask.title}</div>)} */}
      <span className={classes.date}>{dayOfMonth}</span>
      <TaskList
        tasks={newTasks || []}
        year={year}
        month={month}
        dayOfMonth={dayOfMonth}
      />
    </li>
  );
};

export default DayListItem;
