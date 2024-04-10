/* eslint-disable react/prop-types */
import "./Button.scss";

const Button = ({ children, inactive }) => {
  return <button className={`${"btn"} ${inactive}`}>{children}</button>;
};

export default Button;
