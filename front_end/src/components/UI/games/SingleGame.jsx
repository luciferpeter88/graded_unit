import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { Link } from "react-router-dom";
import gameContext from "../../../context_Reducer/games/gameContext";

function SingleGame() {
  const { gamesName } = useParams();
  const { gameState, gameDispatch } = useContext(gameContext);
  // run this useEffect when gamesName changes
  useEffect(() => {
    // set the payload to the gamesName
    gameDispatch({ type: "SET_GAME_URL", payload: gamesName });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gamesName]);

  return (
    <div>
      <iframe
        src={gameState.gameUrl}
        title="Online Game"
        className="w-full h-screen absolute top-0 left-0 z-40"
        allowFullScreen
      ></iframe>
      <Link to="/games">
        <div className=" text-4xl font-extrabold text-white z-50 absolute top-3 right-3 cursor-pointer">
          <AiOutlineClose />
        </div>
      </Link>
    </div>
  );
}

export default SingleGame;
