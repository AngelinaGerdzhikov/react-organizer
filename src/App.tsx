import YearPage from "./pages/YearPage";
import MonthPage from './pages/MonthPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAppSelector } from "./hooks/store-hooks";
import CalendarYear from "./models/calendar/calendar-year";

function App() {
  const currentYearNumber = useAppSelector((state => state.calendar.currentYearNumber));
  const currentMonthNumber = useAppSelector((state => state.calendar.currentMonthNumber));
  const currentYear = new CalendarYear(currentYearNumber);
  const currentMonth = currentYear.calendarMonths[currentMonthNumber];

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={`/year/${currentYear}/month/${currentMonth}`} />
      </Route>
     <Route path={'/year/:year'} exact><YearPage /></Route>
     <Route path={'/year/:year/month/:month'}><MonthPage month={currentMonth}/></Route>
    </Switch>
  );
};

export default App;