import './Header.scss';
import Logo from './Logo/Logo';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import UploadButton from './UploadButton/UploadButton';
function Header() {
    return (
        <header className="header">
          <Logo />
          <HeaderContainer />
          <UploadButton />
        </header> 
    )
}

export default Header;