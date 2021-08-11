import { Link, useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";

import { CURRENT_USER } from "../queries/current-user";
import { LOGOUT_USER } from "../mutations/auth";

const Header = () => {
  const { data, loading } = useQuery(CURRENT_USER);
  const [logout] = useMutation(LOGOUT_USER);

  const history = useHistory();

  const logoutHandler = () => {
    logout({
      refetchQueries: [{ query: CURRENT_USER }],
    });
  };

  const renderButtons = () => {
    if (loading) return <div />;

    const { user } = data;

    if (user) {
      return (
        <li>
          <Link to={history.location.pathname} onClick={logoutHandler}>
            Logout
          </Link>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default Header;
