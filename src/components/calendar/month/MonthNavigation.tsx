import { useAppDispatch } from "../../../hooks/store-hooks";
import { calendarActions } from "../../../store/calendar-slice";

const MonthNavigation: React.FC<{ monthName: string; year: number }> = (
  props
) => {
  const dispatch = useAppDispatch();

  const getPreviousMonthHandler = () => {
    console.log('Get previous month');
  }

  const getNextMonthHandler = () => {
    // dispatch(calendarActions.getNextMonth({}))
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
