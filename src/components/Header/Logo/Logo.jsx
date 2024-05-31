import './Logo.scss';
import logoImage from '../../../assets/images/BrainFlix-logo.svg';
function Logo() {
    return (
        <div className="header__logo"><a href="https://brainflixx.com" className="header__logo-link">
            <img src={logoImage} alt="BrainFlix header logo" className="header__logo-img"/>
        </a>
        </div>
    )
}

export default Logo;