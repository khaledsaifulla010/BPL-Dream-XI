import "./App.css";
import Banner from "./Components/Header/Banner/Banner";
import NavBar from "./Components/Header/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="px-20 mt-8">
        <NavBar></NavBar>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
