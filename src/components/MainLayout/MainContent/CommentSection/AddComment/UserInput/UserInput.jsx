import "./UserInput.scss";

function UserInput({ name, comment, onNameChange, onCommentChange }) {
  return (
    <>
      <label htmlFor="name" className="form__label">
        NAME
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="form__field"
        placeholder="Enter your name"
        value={name}
        onChange={onNameChange}
      />
      <label htmlFor="comment" className="form__label">
        JOIN THE CONVERSATION
      </label>
      <textarea
        id="comment"
        name="comment"
        className="form__field"
        placeholder="Add a new comment"
        value={comment}
        onChange={onCommentChange}
      ></textarea>
    </>
  );
}

export default UserInput;
