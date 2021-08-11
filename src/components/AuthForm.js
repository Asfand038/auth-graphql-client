import { useRef } from "react";

const AuthForm = ({ onSubmit, error }) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    onSubmit({ email, password });
  };

  return (
    <div className="row">
      <form className="col s6" onSubmit={formSubmitHandler}>
        <div className="input-field">
          <input placeholder="Email" type="email" ref={emailInputRef} />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            ref={passwordInputRef}
          />
        </div>
        {error && <div className="errors">{error}</div>}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
