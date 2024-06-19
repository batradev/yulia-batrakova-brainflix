import "./UploadButton.scss";
import { useNavigate } from 'react-router-dom';

function UploadButton({ buttonText, type, className }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/upload');
  };
  return (
    <button className={className} type={type} onClick={handleClick}>
      {buttonText} 
    </button>
  );
}

export default UploadButton;
