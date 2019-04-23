import React from 'react';

export const LoginForm = ({ onChange, onSubmit }) => {
  return (
    <form className="login" onSubmit={onSubmit}>
      <input type="text" onChange={onChange} />
      <button>Login</button>
    </form>
  );
};
