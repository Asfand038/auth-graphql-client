import { useMutation } from "@apollo/client";

import AuthForm from "../components/AuthForm";
import { LOGIN_USER } from "../mutations/auth";
import { CURRENT_USER } from "../queries/current-user";

const LoginPage = () => {
  const [login, { error }] = useMutation(LOGIN_USER);

  const loginHandler = ({ email, password }) => {
    login({
      variables: { email, password },
      refetchQueries: [{ query: CURRENT_USER }],
    }).catch(() => {
      // alternate to the current error handling
      // const errors = res.graphQLErrors.map((error) => error.message);
      // Define some error state in component and set it to errors.
      // setErrors(errors)
    });
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <AuthForm onSubmit={loginHandler} error={error ? error.message : null} />
    </div>
  );
};

export default LoginPage;
