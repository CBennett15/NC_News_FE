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
      <div>
        <form className="login" onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChange}
            placeholder="Enter Username..."
          />
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
