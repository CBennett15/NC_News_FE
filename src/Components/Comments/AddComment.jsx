import React from 'react';

export const AddComment = ({ handleTyping, handleSubmit }) => {
  return (
    <div>
      <form className="addcomment" onSubmit={handleSubmit}>
        <label>
          Comment: <input type="textarea" onChange={handleTyping} />
        </label>
        <button>Add Comment</button>
      </form>
    </div>
  );
};
