import React from 'react';

export const RegisterForm = ({ onSubmit, onChange, error }) => {
  return (
    <form className="register">
      <fieldset>
        <legend>Sign Up</legend>
        <label className="title">
          Username:
          <input
            name="username"
            type="text"
            onChange={onChange}
            placeholder="Enter Username..."
          />
        </label>
        <br />
        <label className="title">
          Name:{' '}
          <input
            name="name"
            type="text"
            onChange={onChange}
            placeholder="Enter Name..."
          />
        </label>
        <br />
        <label>
          Avatar Url:{' '}
          <input
            name="avatar_url"
            type="text"
            onChange={onChange}
            placeholder="Enter Image Url..."
          />
        </label>

        <button onClick={onSubmit}>Sign Up</button>
        {error && (
          <p className="error">
            Sorry, All fields are required. Please try again
          </p>
        )}
      </fieldset>
    </form>
  );
};
