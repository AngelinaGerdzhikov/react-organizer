import YearPage from "./pages/YearPage";
import MonthPage from './pages/MonthPage';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={"/year/2021/month/5"} />
      </Route>
     <Route path={'/year/:year'} exact><YearPage /></Route>
     <Route path={'/year/:year/month/:month'}><MonthPage /></Route>
    </Switch>
  );
};

export default App;