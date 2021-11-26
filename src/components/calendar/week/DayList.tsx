import { useEffect } from "react";
import CalendarWeek from "../../../models/calendar/calendar-week";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/store-hooks";
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
        dispatch(taskActions.setTaskHasBeenDeleted(true));
      }, 300000);
    }
  }, [dispatch, taskHasBeenDeleted]);

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
          return day && <DayListItem day={day} key={dayIndex} />;
        })}
      </ul>
      {taskHasBeenDeleted && (
        <UndoTask onDoNotUndo={doNotUndoHandler} onUndo={undoHandler} />
      )}
    </section>
  );
};

export default DayList;
