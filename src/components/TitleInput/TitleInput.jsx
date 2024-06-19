import "./TitleInput.scss";

function TitleInput() {
  return (
    <>
      <label for="title" className="form__label">
        TITLE YOUR VIDEO
      </label>
      <textarea
        id="title"
        name="title"
        className="form__field"
        placeholder="Add a title to your video"
      ></textarea>
    </>
  );
}

export default TitleInput;