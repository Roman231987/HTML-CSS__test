import IconArrowLeft from "../../../dist/icons/icon-arrow-left.svg?react";
import IconArrowRight from "../../../dist/icons/icon-arrow-right.svg?react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__text">Showing data 1 to 8 of 256K entries</h3>
      <div className="footer__btn">
        <button className="button">
          <IconArrowLeft />
        </button>
        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button">4</button>
        ...
        <button className="button">40</button>
        <button className="button">
          <IconArrowRight />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
