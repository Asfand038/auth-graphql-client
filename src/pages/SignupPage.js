import { useMutation } from "@apollo/client";

import AuthForm from "../components/AuthForm";
import { SIGNUP_USER } from "../mutations/auth";
import { CURRENT_USER } from "../queries/current-user";

const SignupPage = () => {
  const [signup, { error }] = useMutation(SIGNUP_USER);

  const signupHandler = ({ email, password }) => {
    signup({
      variables: { email, password },
      refetchQueries: [{ query: CURRENT_USER }],
    }).catch((res) => {
      // alternate to the current error handling
      // const errors = res.graphQLErrors.map((error) => error.message);
      // Define some error state in component and set it to errors.
      // setErrors(errors)
    });
  };

  return (
    <div className="container">
      <h3>Signup</h3>
      <AuthForm onSubmit={signupHandler} error={error ? error.message : null} />
    </div>
  );
};

export default SignupPage;
