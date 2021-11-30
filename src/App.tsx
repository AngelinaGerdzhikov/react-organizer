import { Redirect, Route, Switch } from "react-router-dom";
import MonthPage from "./pages/MonthPage";
import WeekPage from './pages/WeekPage';
import YearPage from "./pages/YearPage";
import CalendarCreator from "./utility/calendar-creator";
import { getYearFromStorage } from "./utility/local-storage-manager";

function App() {  
  const today = new Date();
  const todayYearNumber = today.getFullYear();
  const currentYear = getYearFromStorage(todayYearNumber);
  const todayMonthNumber = today.getMonth();
  const currentMonth = currentYear.calendarMonths[todayMonthNumber];
  const todayWeekNumberOfMonth = CalendarCreator.getWeekOfMonthByDay(today, currentMonth);
  const redirectUrl = `/year/${todayYearNumber}/month/${todayMonthNumber}/week/${todayWeekNumberOfMonth}`;

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={redirectUrl} />
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
      <Route render={() => <Redirect to={redirectUrl} />}></Route>
    </Switch>
  );
}

export default App;
