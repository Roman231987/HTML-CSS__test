import "./LogoHello.scss";

const LogoHello = () => {
  return (
    <div className="logo-hello">
      Hello Evano
      <img
        className="logo-hello__icon"
        src="dist/icons/icon__hello.png"
        alt="Лого hello"
      />
    </div>
  );
};

export default LogoHello;
