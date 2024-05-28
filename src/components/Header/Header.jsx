import "./Header.scss";
import Logo from "./Logo/Logo";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import UploadButton from "./HeaderContainer/UploadButton/UploadButton";

function Header() {
  return (
    <header className="header">
      <Logo />
      <HeaderContainer />
      <div className="header__buttonfirst-container">
        <UploadButton
          className="header__buttonfirst"
          type="button"
          buttonText="UPLOAD"
        />
      </div>
    </header>
  );
}

export default Header;
