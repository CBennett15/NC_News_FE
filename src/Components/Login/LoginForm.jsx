import React from 'react';

export const LoginForm = ({ onChange, onSubmit, loggedin, onClick }) => {
  if (!loggedin)
    return (
      <form className="login" onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button>Login</button>
      </form>
    );
  return <button onClick={onClick}>Logout</button>;
};
