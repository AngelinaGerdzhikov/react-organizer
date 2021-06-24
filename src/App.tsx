import YearPage from "./pages/YearPage";
import MonthPage from './pages/MonthPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAppSelector } from "./hooks/store-hooks";

function App() {
  const currentYear = useAppSelector((state => state.calendar.currentYearNumber));
  const currentMonth = useAppSelector((state => state.calendar.currentMonthNumber));

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={`/year/${currentYear}/month/${currentMonth}`} />
      </Route>
     <Route path={'/year/:year'} exact><YearPage /></Route>
     <Route path={'/year/:year/month/:month'}><MonthPage /></Route>
    </Switch>
  );
};

export default App;