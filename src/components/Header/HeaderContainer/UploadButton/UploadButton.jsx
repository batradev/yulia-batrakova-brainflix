import "./UploadButton.scss";

function UploadButton({ buttonText, type, className }) {
  return (
    <button className={className} type={type}>
      {buttonText}
    </button>
  );
}

export default UploadButton;
