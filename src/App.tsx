import { Redirect, Route, Switch } from "react-router-dom";
import MonthPage from "./pages/MonthPage";
import WeekPage from './pages/WeekPage';
import YearPage from "./pages/YearPage";

function App() {  
  const today = new Date();
  const todayYearNumber = today.getUTCFullYear();

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={`/year/${todayYearNumber}`} />
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
