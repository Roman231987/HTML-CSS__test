import Search from "../Search/Search";
import "./SectionAbout.scss";

const SectionAbout = () => {
  return (
    <section>
      {" "}
      <div className="section-about">
        <div>
          <h1 className="section-about__h1">All Customers</h1>
          <h2 className="section-about__h2">Active Members</h2>
        </div>
        <Search />
      </div>
    </section>
  );
};

export default SectionAbout;
