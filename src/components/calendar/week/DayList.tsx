import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/store-hooks";
import CalendarWeek from "../../../models/calendar/calendar-week";
import { taskActions } from "../../../store/task-slice";
import UndoTask from "../../tasks/UndoTask";
import classes from "./DayList.module.css";
import DayListItem from "./DayListItem";

const DayList: React.FC<{ week: CalendarWeek }> = (props) => {
  const dispatch = useAppDispatch();
 
  const taskHasBeenDeleted = useAppSelector(
    (state) => state.tasks.present.taskHasBeenDeleted
  );

  useEffect(() => {
    if (taskHasBeenDeleted) {
      setTimeout(() => {
        dispatch(taskActions.setTaskHasBeenDeleted(false));
      }, 300000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskHasBeenDeleted]);

  const doNotUndoHandler = () => {
    dispatch(taskActions.setTaskHasBeenDeleted(false));
  };

  const undoHandler = () => {
    dispatch(taskActions.setTaskHasBeenDeleted(false));
  };

  return (
    <section>
      <ul className={classes.weekdays}>
        {props.week.days.map((day, dayIndex) => {
          return (
            day && <DayListItem day={day} key={dayIndex} />
          );
        })}
      </ul>
      {taskHasBeenDeleted && (
        <UndoTask onDoNotUndo={doNotUndoHandler} onUndo={undoHandler} />
      )}
    </section>
  );
};

export default DayList;
