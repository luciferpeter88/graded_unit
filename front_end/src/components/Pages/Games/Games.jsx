import React, { useContext } from "react";
import GamesCard from "../../UI/games/GamesCard";
import gameContext from "../../../context_Reducer/games/gameContext";
import Footer from "../../UI/footer/Footer";
function Games() {
  const { gameState } = useContext(gameContext);
  return (
    <React.Fragment>
      <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center mt-8">
        Games
      </h1>
      <div className=" mt-16 px-3 flex flex-wrap gap-5 justify-evenly gap-y-10">
        {gameState.gameList.map((game) => {
          return (
            <GamesCard
              key={game.id}
              title={game.name}
              description={game.description}
              image={game.imageSrc}
            />
          );
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Games;
