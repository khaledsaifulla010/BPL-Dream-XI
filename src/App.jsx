import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Header/Banner/Banner";
import NavBar from "./Components/Header/NavBar/NavBar";
import MainSection from "./Components/MainSection/MainSection";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // added coins

  const [coins, setCoins] = useState(0);

  const handleClaimCoins = () => {
    //  console.log(coins);
    const totalCoins = coins + 1000000;
    setCoins(totalCoins);

    // React Toastify

    const notify = () =>
      toast.success("Credit Added to Your Account", {
        position: "top-center",
      });

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

  // All players Load

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // Selected Players

  const [select, setSelect] = useState([]);

  const handleSelectPlayer = (player) => {
    const selectNotification = () =>
      toast.success(`Congrats!! ${player.name} is now in your Squad`, {
        position: "top-center",
      });
    const insufficientCreditNotification = () =>
      toast.error("Not Enough Credit", {
        position: "top-center",
      });
    const duplicatePlayerNotification = () =>
      toast.warning("Player is already in your squad", {
        position: "top-center",
      });

    const maxPlayersNotification = () =>
      toast.warning("You can only select up to 6 players", {
        position: "top-center",
      });

    const newTotalsCoins = coins - player.price;

    const isPlayerAlreadySelected = select.some(
      (selectedPlayer) => selectedPlayer.id === player.id
    );

    if (isPlayerAlreadySelected) {
      duplicatePlayerNotification();
    } else if (newTotalsCoins < 0) {
      insufficientCreditNotification();
    } else if (select.length >= 6) {
      maxPlayersNotification();
    } else {
      const newSelect = [...select, player];
      setCoins(newTotalsCoins);
      selectNotification();
      setSelect(newSelect);
    }
  };

  return (
    <>
      <div className="px-20 mt-8">
        <NavBar coins={coins}></NavBar>
        <Banner handleClaimCoins={handleClaimCoins}></Banner>
        <MainSection
          handleIsActiveState={handleIsActiveState}
          isActive={isActive}
          players={players}
          handleSelectPlayer={handleSelectPlayer}
          select={select}
        ></MainSection>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
