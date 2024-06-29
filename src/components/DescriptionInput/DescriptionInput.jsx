import "./DescriptionInput.scss";

function DescriptionInput() {
  return (
    <>
      <label htmlFor="description" className="form__label">
        ADD A VIDEO DESCRIPTION
      </label>
      <textarea
        id="description"
        name="description"
        className="form__field"
        placeholder="Add a description to your video"
      ></textarea>
    </>
  );
}

export default DescriptionInput;