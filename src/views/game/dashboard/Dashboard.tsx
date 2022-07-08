import React, { FC, useContext } from "react";
import { GameContext } from "../../../providers/GameProvider";
import { HttpMethods, useGameFetch } from "../../../hooks";
import { RangeSlider } from "../../../components/range-slider/RangeSlider";
import { Button } from "../../../components/button/button";
import { Wrapper, BtnsGroup, BetButton, BetDisplay } from "./dashboard.style";

export const Dashboard: FC = () => {
  const { setBet, bet } = useContext(GameContext);
  const { callApi, player } = useGameFetch();

  const isDisabled = player?.gameResult ? true : false;

  const betHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/game/bet", {
        method: "PUT",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bet }),
      });
      const playerRes = (await res.json()) as PlayerDataRes;
      setPlayer(playerRes);
      console.log(res);
      if (isResError(res)) return;
    } catch (error) {
      dispatchError();
    }
  };

  return (
    <Wrapper>
      {player?.isBet && (
        <BtnsGroup>
          <Button disabled={isDisabled} onClick={standHandler}>
            Stand
          </Button>
          <Button disabled={isDisabled} onClick={pickHandler}>
            Pick
          </Button>
        </BtnsGroup>
      )}
      {!player?.isBet && (
        <BtnsGroup>
          <BetButton disabled={bet ? false : true} onClick={betHandler}>
            Bet{bet === 0 ? null : <BetDisplay>{bet} $</BetDisplay>}
          </BetButton>
          <RangeSlider
            value={bet}
            setValue={setBet}
            maxRange={player?.means ?? 0}
          />
        </BtnsGroup>
      )}
    </Wrapper>
  );
};
