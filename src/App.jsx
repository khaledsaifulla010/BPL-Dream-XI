import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Header/Banner/Banner";
import NavBar from "./Components/Header/NavBar/NavBar";

function App() {
  // added coins

  const [coins, setCoins] = useState(0);

  const handleClaimCoins = () => {
    //  console.log(coins);
    const totalCoins = coins + 500000;
    setCoins(totalCoins);
  };

  return (
    <>
      <div className="px-20 mt-8">
        <NavBar coins={coins}></NavBar>
        <Banner handleClaimCoins={handleClaimCoins}></Banner>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
