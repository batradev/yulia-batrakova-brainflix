import "./CommentButton.scss";


function CommentButton({ buttonText, type, className }) {

  return (
    <button className={className} type={type} >
      {buttonText} 
    </button>
  );
}

export default CommentButton;