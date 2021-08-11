import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import ProtectedRoute from "./hoc/ProtectedRoute";
import UnprotectedRoute from "./hoc/UnprotectedRoute";
import { DashboardPage, LandingPage, LoginPage, SignupPage } from "./pages";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <UnprotectedRoute path="/signup" component={SignupPage} />
        <UnprotectedRoute path="/login" component={LoginPage} />
        <ProtectedRoute path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  );
};

export default App;
