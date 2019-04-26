import React from 'react';

export const AddCommentForm = ({ handleSubmit, handleTyping, error }) => {
  return (
    <div>
      <form className="addcomment" onSubmit={handleSubmit}>
        <label>
          <textarea type="textarea" onChange={handleTyping} />
        </label>
        {error && <p className="error">Sorry, please add a comment</p>}
        <button>Add New Comment</button>
      </form>
    </div>
  );
};
