import { useHistory } from "react-router-dom";
import { useAppSelector } from "../hooks/store-hooks";
import { calendarActions } from "./calendar-slice";

export const getNextMonthData = () => {
  return async (dispatch: any) => {
    const currentMonthNumber = useAppSelector(
      (state) => state.calendar.currentMonthNumber
    );
    const currentYearNumber = useAppSelector(
      (state) => state.calendar.currentYearNumber
    );
    const history = useHistory();

    const getNextMonth = async () => {
      dispatch(calendarActions.getNextMonth({}));
    };

    await getNextMonth();

    history.push(`/year/${currentYearNumber}/month/${currentMonthNumber}`);
  };
};
