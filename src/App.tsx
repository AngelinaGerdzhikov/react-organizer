/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Redirect, Route, Switch, useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/store-hooks";
import MonthPage from "./pages/MonthPage";
import YearPage from "./pages/YearPage";
import WeekPage from './pages/WeekPage';
import { calendarActions } from "./store/calendar-slice";

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const currentYearNumber = useAppSelector((state) => state.calendar.currentYearNumber);
  
  const today = new Date();
  const todayYearNumber = today.getUTCFullYear();
  const todayMonthNumber = today.getUTCMonth();

  useEffect(() => {
    if (location.pathname === '/') {      
      dispatch(
        calendarActions.setCurrent({ monthNumber: todayMonthNumber, yearNumber: todayYearNumber })
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
      <Route path={"/year/:year/month/:month/week/:week"} exact>
        <WeekPage />
      </Route>
      <Route render={() => <Redirect to={`/year/${todayYearNumber}`} />}></Route>
    </Switch>
  );
}

export default App;
