import React from 'react';

export const LoginForm = ({
  onChange,
  onSubmit,
  loggedin,
  onClick,
  error,
  handleGuest,
}) => {
  if (!loggedin)
    return (
      <div className="loginform">
        <form className="login" onSubmit={onSubmit}>
          <label>
            Enter Username:
            <input
              type="text"
              onChange={onChange}
              placeholder="Enter Username..."
            />
          </label>
          <button>Login</button>
          {error && (
            <p className="error">
              Sorry, invalid username, please try again or Sign Up
            </p>
          )}
        </form>
        <button onClick={handleGuest} value="Guest">
          Login as Guest
        </button>
      </div>
    );
  return <button onClick={onClick}>Logout</button>;
};
