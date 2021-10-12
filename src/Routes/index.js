import { Switch, Route } from "react-router";
import ResultSearch from "../pages/ResultSearch";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/resultSearch"}>
        <ResultSearch />
      </Route>
    </Switch>
  );
};
export default Routes;
