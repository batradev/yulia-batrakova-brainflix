import './Logo.scss';
import logoImage from '../../../assets/images/BrainFlix-logo.svg';
import { useNavigate } from 'react-router-dom';

function Logo() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/');
    };
    return (
        <div className="header__logo"><a href="/" className="header__logo-link" onClick={handleClick}>
            <img src={logoImage} alt="BrainFlix header logo" className="header__logo-img"/>
        </a>
        </div>
    )
}

export default Logo;