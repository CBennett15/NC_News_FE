import React from 'react';

export const LoginForm = ({ onChange, onSubmit, loggedin }) => {
  return (
    <form className="login" onSubmit={onSubmit}>
      <input type="text" onChange={onChange} />
      {!loggedin ? <button>Login</button> : <button>Logout</button>}
    </form>
  );
};
