import "./HeaderContainer.scss";
import SearchBar from "./SearchBar/SearchBar";
import UploadButton from "./UploadButton/UploadButton";
import UserAvatar from "./UserAvatar/UserAvatar";

function HeaderContainer() {
  return (
    <div className="header__container">
      <SearchBar />
      <div className="header__button-container">
        <UploadButton
          className="header__button"
          type="button"
          buttonText="UPLOAD"
        />
      </div>
      <UserAvatar />
    </div>
  );
}

export default HeaderContainer;
