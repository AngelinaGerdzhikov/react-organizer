import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/store-hooks";
import { calendarActions } from "../../../store/calendar-slice";

const MonthNavigation: React.FC<{ monthName: string; year: number }> = (
  props
) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const currentYearNumber = useAppSelector(state => state.calendar.currentYearNumber);
  const currentMonthNumber = useAppSelector(state => state.calendar.currentMonthNumber);

  useEffect(() => {
    history.push(`/year/${currentYearNumber}/month/${currentMonthNumber}`);
  }, [currentYearNumber, currentMonthNumber]);

  const getPreviousMonthHandler = () => {
    dispatch(calendarActions.getPreviousMonth({}));
  }

  const getNextMonthHandler = () => {
    dispatch(calendarActions.getNextMonth({}));

  }

  return (
    <nav>
      <button onClick={getPreviousMonthHandler}>{'<'}</button>
      <h1>
        {props.monthName} {props.year}
      </h1>  
      <button onClick={getNextMonthHandler}>{'>'}</button>
    </nav>
  );
};

export default MonthNavigation;
