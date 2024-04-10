import Sidebar from "./components/layout/Sidebar";
import SectionAbout from "./components/layout/SectionAbout";
import SectionTable from "./components/layout/SectionTable";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <Header />
        <main className="main">
          <SectionAbout />
          <SectionTable />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
