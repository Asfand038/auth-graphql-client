import { useQuery } from "@apollo/client";
import { Route, useHistory } from "react-router-dom";

import { CURRENT_USER } from "../queries/current-user";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { data, loading } = useQuery(CURRENT_USER);
  const history = useHistory();

  if (loading) return <div>Loading...</div>;

  const { user } = data;

  if (user) {
    history.push("/dashboard");
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;
