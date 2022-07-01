import React, { FC, useContext } from "react";
import { RangeSlider } from "../../../components/range-slider/RangeSlider";
import { PlayerDataRes } from "types";
import { Button } from "../../../components/button/button";
import { Wrapper, BtnsGroup, BetButton, BetDisplay } from "./dashboard.style";
import { GameContext } from "../../../providers/GameProvider";
import { useCheckRes, useError } from "../../../hooks";

export const Dashboard: FC = () => {
  const { setBet, bet, setPlayer, player } = useContext(GameContext);
  const isResError = useCheckRes();
  const { dispatchError } = useError();

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
          <Button>Stand</Button>
          <Button>Pick</Button>
        </BtnsGroup>
      )}
      {!player?.isBet && (
        <BtnsGroup>
          <BetButton onClick={betHandler}>
            Bet{bet === 0 ? null : <BetDisplay>{bet}</BetDisplay>}
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
