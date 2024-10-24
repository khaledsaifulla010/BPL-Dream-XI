import "./App.css";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Header/Banner/Banner";
import NavBar from "./Components/Header/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="px-20 mt-8">
        <NavBar></NavBar>
        <Banner></Banner>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
