import { useEffect } from "react";
import CalendarWeek from "../../../models/calendar/calendar-week";
import { useAppDispatch } from "../../../store/hooks/store-hooks";
import { fetchTasksAsync } from "../../../store/task-thunks";
import DayList from './DayList';

const WeekDetails: React.FC<{ week: CalendarWeek }> = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasksAsync());
  }, [dispatch]);

  return (
    <DayList week={props.week} />
  );
};

export default WeekDetails;
