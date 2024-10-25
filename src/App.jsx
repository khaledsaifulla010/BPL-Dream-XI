import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Header/Banner/Banner";
import NavBar from "./Components/Header/NavBar/NavBar";
import MainSection from "./Components/MainSection/MainSection";

//React Toastify

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // React Toastify

  const notify = () =>
    toast.success("Credit Added to Your Account", {
      position: "top-center",
    });

  // added coins

  const [coins, setCoins] = useState(0);

  const handleClaimCoins = () => {
    //  console.log(coins);
    const totalCoins = coins + 500000;
    setCoins(totalCoins);

    // React Toastify
    notify();
  };

  // Active Toggle Button

  const [isActive, setIsActive] = useState({
    availability: true,
    status: "availability",
  });

  const handleIsActiveState = (status) => {
    if (status === "availability") {
      setIsActive({
        availability: true,
        status: "availability",
      });
    } else {
      setIsActive({
        availability: false,
        status: "selected",
      });
    }
  };
  // console.log(isActive);

  return (
    <>
      <div className="px-20 mt-8 mb-[1200px]">
        <NavBar coins={coins}></NavBar>
        <Banner handleClaimCoins={handleClaimCoins}></Banner>
        <MainSection
          handleIsActiveState={handleIsActiveState}
          isActive={isActive}
        ></MainSection>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
