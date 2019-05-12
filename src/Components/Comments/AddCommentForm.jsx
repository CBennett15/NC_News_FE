import React from 'react';

export const AddCommentForm = ({ handleSubmit, handleTyping, error }) => {
  return (
    <div className="addcommentform">
      <form className="addcomment" onSubmit={handleSubmit}>
        <label>
          <textarea
            placeholder="Please enter your comment here..."
            type="textarea"
            onChange={handleTyping}
          />
        </label>
        {error && <p className="error">Sorry, please add a comment</p>}
        <button>Add New Comment</button>
      </form>
    </div>
  );
};
