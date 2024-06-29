import "./TitleInput.scss";

function TitleInput() {
  return (
    <>
      <label htmlFor="title" className="form__label-title">
        TITLE YOUR VIDEO
      </label>
      <textarea
        id="title"
        name="title"
        className="form__field-title"
        placeholder="Add a title to your video"
      ></textarea>
    </>
  );
}

export default TitleInput;