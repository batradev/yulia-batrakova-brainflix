import "./DescriptionInput.scss";

function DescriptionInput() {
  return (
    <>
      <label for="description" className="form__label">
        ADD A VIDEO DESCRIPTION
      </label>
      <textarea
        id="big__field"
        name="description"
        className="form__field"
        placeholder="Add a description to your video"
      ></textarea>
    </>
  );
}

export default DescriptionInput;