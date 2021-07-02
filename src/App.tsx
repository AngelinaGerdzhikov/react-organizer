/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Redirect, Route, Switch, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/store-hooks";
import MonthPage from "./pages/MonthPage";
import YearPage from "./pages/YearPage";
import { calendarActions } from "./store/calendar-slice";

function App() {
  const params = useParams();
  const currentYearNumber = useAppSelector((state) => state.calendar.currentYearNumber);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Object.keys(params).length === 0) {
      const today = new Date();
      const updatedCurrentYearNumber = today.getUTCFullYear();
      dispatch(
        calendarActions.setCurrent({ monthNumber: 0, yearNumber: updatedCurrentYearNumber })
        );
      }
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={`/year/${currentYearNumber}`} />
      </Route>
      <Route path={"/year/:year"} exact>
        <YearPage />
      </Route>
      <Route path={"/year/:year/month/:month"} exact>
        <MonthPage />
      </Route>
      <Route render={() => <Redirect to={`/year/${currentYearNumber}`} />}></Route>
    </Switch>
  );
}

export default App;
