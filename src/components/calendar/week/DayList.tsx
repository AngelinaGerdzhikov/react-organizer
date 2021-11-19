import CalendarDay from "../../../models/calendar/calendar-day";
import CalendarWeek from "../../../models/calendar/calendar-week";
import ICalendarItem from "../../../models/tasks/calendar-item.interface";
import { Task } from "../../../models/tasks/task";
import { useAppSelector } from "../../../store/hooks/store-hooks";
import classes from "./DayList.module.css";
import DayListItem from "./DayListItem";

const DayList: React.FC<{ week: CalendarWeek }> = (props) => {
  // const dispatch = useAppDispatch();
  const tasksByWeekDay: any[] = [[]];
  // const tasks = useAppSelector(state => state.tasks.present.tasks.map((task: ICalendarItem) => {
  //   const weekTask = new Task(task.title, task.due_date, task.status, task.id);
  //   const dayOfWeek = new Date(task.due_date).getDay();

  //   // tasksByWeekDay[dayOfWeek].push(weekTask);
  //   return new Task(task.title, task.due_date, task.status, task.id);
  // }));
  
  // props.week.days.forEach((day: CalendarDay) => {
    
  // })

  // const taskHasBeenDeleted = useAppSelector(
  //   (state) => state.tasks.present.taskHasBeenDeleted
  // );

  // useEffect(() => {
  //   if (taskHasBeenDeleted) {
  //     setTimeout(() => {
  //       // dispatch(taskActions.setTaskHasBeenDeleted(false));
  //     }, 300000);
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [taskHasBeenDeleted]);

  // const doNotUndoHandler = () => {
  //   dispatch(taskActions.setTaskHasBeenDeleted(false));
  // };

  // const undoHandler = () => {
  //   dispatch(taskActions.setTaskHasBeenDeleted(false));
  // };

  return (
    <section>
      <ul className={classes.weekdays}>
        {props.week.days.map((day, dayIndex) => {
          return day && <DayListItem day={day} key={dayIndex} tasks={tasksByWeekDay[dayIndex]} />;
        })}
      </ul>
      {/* {taskHasBeenDeleted && (
        <UndoTask onDoNotUndo={doNotUndoHandler} onUndo={undoHandler} />
      )} */}
    </section>
  );
};

export default DayList;
