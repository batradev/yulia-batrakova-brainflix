import "./UserInput.scss";

function UserInput() {
  return (
    <>
      <label for="comment" className="form__label">
        JOIN THE CONVERSATION
      </label>
      <textarea
        id="comment"
        name="comment"
        className="form__field"
        placeholder="Add a new comment"
      ></textarea>
    </>
  );
}

export default UserInput;
