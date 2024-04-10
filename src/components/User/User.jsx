import "./User.scss";

const User = () => {
  return (
    <div className="user">
      <img
        className="user__img"
        src="./dist/icons/user_img.png"
        alt="Аватарка користувача"
      />
      <div className="user__name">
        Evano
        <div className="user__status">Project Manager</div>
      </div>
    </div>
  );
};

export default User;
