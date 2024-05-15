import './Header.scss';
import Logo from './Logo/Logo';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import UploadButtonFirst from './UploadButtonFirst/UploadButtonFirst';
function Header() {
    return (
        <header className="header">
          <Logo />
          <HeaderContainer />
          <UploadButtonFirst />
        </header> 
    )
}

export default Header;