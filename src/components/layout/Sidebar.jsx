import Logo from "../Logo/Logo";
import ArrowBtn from "../../../dist/icons/vector.svg?react";
import Icon_1 from "../../../dist/icons/icon_1.svg?react";
import Icon_2 from "../../../dist/icons/icon_2.svg?react";
import Icon_3 from "../../../dist/icons/icon_3.svg?react";
import Icon_4 from "../../../dist/icons/icon_4.svg?react";
import Icon_5 from "../../../dist/icons/icon_5.svg?react";
import Icon_6 from "../../../dist/icons/icon_6.svg?react";
import User from "../User/User";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Logo />
      </div>
      <div className="sidebar__nav">
        <button className="sidebar__btn">
          <Icon_1 />
          Dashboard
        </button>
        <button className="sidebar__btn">
          <Icon_2 />
          <div className="sidebar__txt">Product</div>
          <div className="sidebar__arrow">
            <ArrowBtn />
          </div>
        </button>
        <button className="sidebar__btn">
          <Icon_3 />
          <div className="sidebar__txt">Customers</div>
          <div className="sidebar__arrow">
            <ArrowBtn />
          </div>
        </button>
        <button className="sidebar__btn">
          <Icon_4 />
          <div className="sidebar__txt">Income</div>
          <div className="sidebar__arrow">
            <ArrowBtn />
          </div>
        </button>
        <button className="sidebar__btn">
          <Icon_5 />
          <div className="sidebar__txt"> Promote</div>
          <div className="sidebar__arrow">
            <ArrowBtn />
          </div>
        </button>
        <button className="sidebar__btn">
          <Icon_6 />
          <div className="sidebar__txt">Help</div>
          <div className="sidebar__arrow">
            <ArrowBtn />
          </div>
        </button>
      </div>
      <User />
    </div>
  );
};

export default Sidebar;
