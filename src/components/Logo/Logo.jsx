import "./Logo.scss";
const Logo = () => {
  return (
    <div className="logo">
      <img
        className="logo__icon"
        src="dist/icons/logo.svg"
        alt="Iконка лого"
      />
      Dashboard
      <span className="logo__span">v.01</span>
    </div>
  );
};

export default Logo;
