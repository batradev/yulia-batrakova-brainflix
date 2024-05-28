import "./AddComment.scss";
import UserAvatar from "../../../../Header/HeaderContainer/UserAvatar/UserAvatar";
import UploadButton from "../../../../Header/HeaderContainer/UploadButton/UploadButton";
import UserInput from "./UserInput/UserInput";

function AddComment() {
  return (
    <div className="comments__container">
      <UserAvatar className="alternate" />
      <div className="form-container">
        <form className="form">
          <div className="form__textarea-container">
            <UserInput />
          </div>
          <UploadButton
            className="form__button"
            type="submit"
            buttonText="COMMENT"
          />
        </form>
      </div>
    </div>
  );
}

export default AddComment;
