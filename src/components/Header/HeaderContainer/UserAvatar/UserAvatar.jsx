import "./UserAvatar.scss";

function UserAvatar({ className }) {
  const classNames =
    className === "alternate" ? "alternate" : "comments-container__avatar";

  return <div className={classNames}></div>;
}

export default UserAvatar;
