import React, { FC, useContext } from "react";
import { GameContext } from "../../../providers/GameProvider";
import { HttpMethods, useGameFetch } from "../../../hooks";
import { RangeSlider } from "../../../components/range-slider/RangeSlider";
import { Button } from "../../../components/button/button";
import { Wrapper, BtnsGroup, BetButton, BetDisplay } from "./dashboard.style";

export const Dashboard: FC = () => {
  const { setBet, bet } = useContext(GameContext);
  const { callApi, player } = useGameFetch();
  if (player === null) {
    return <div></div>;
  }

  const isDisabled = player?.gameResult ? true : false;
  const betHandler = async () => {
    await callApi("/bet", { method: HttpMethods.PUT, payload: { bet } });
    setBet(0);
  };

  const standHandler = async () => {
    await callApi("/stand");
  };

  const pickHandler = async () => {
    await callApi("/pick-card");
  };

  const takeCreditsHandler = async () => {
    await callApi("/take-credits");
  };

  return (
    <Wrapper>
      {(player?.means > 0 || player?.playerBet > 0) && (
        <>
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
        </>
      )}
      {!player.means && !player.playerBet && (
        <BtnsGroup>
          <Button disabled={isDisabled} onClick={takeCreditsHandler}>
            Take Credits
          </Button>
        </BtnsGroup>
      )}
    </Wrapper>
  );
};
