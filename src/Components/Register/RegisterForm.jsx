import React from 'react';

export const RegisterForm = ({ onSubmit, onChange, error }) => {
  return (
    <form className="register">
      <label>
        Username:
        <input name="username" type="text" onChange={onChange} />
      </label>
      <label>
        Name: <input name="name" type="text" onChange={onChange} />
      </label>
      <label>
        Avatar Url: <input name="avatar_url" type="text" onChange={onChange} />
      </label>

      <button onClick={onSubmit}>Sign Up</button>
      {error && (
        <p className="error">
          Sorry, All fields are required. Please try again
        </p>
      )}
    </form>
  );
};
