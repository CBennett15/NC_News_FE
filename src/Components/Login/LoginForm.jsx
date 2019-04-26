import React from 'react';

export const LoginForm = ({
  onChange,
  onSubmit,
  loggedin,
  onClick,
  userInput,
  error,
}) => {
  if (!loggedin)
    return (
      <form className="login" onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={userInput} />
        <button>Login</button>
        {error && (
          <p className="error">
            Sorry, invalid username, please try again or Sign Up
          </p>
        )}
      </form>
    );
  return <button onClick={onClick}>Logout</button>;
};
