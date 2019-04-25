import React from 'react';

export const AddCommentForm = ({ handleSubmit, handleTyping }) => {
  return (
    <div>
      <form className="addcomment" onSubmit={handleSubmit}>
        <label>
          <textarea type="textarea" onChange={handleTyping} />
        </label>
        <button>Add New Comment</button>
      </form>
    </div>
  );
};
