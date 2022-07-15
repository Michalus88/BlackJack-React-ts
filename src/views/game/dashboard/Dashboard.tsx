import React, { FC, useContext } from "react";
import { GameContext } from "../../../providers/GameProvider";
import { HttpMethods, useGameFetch, useNotification } from "../../../hooks";
import { RangeSlider } from "../../../components/range-slider/RangeSlider";
import { Button } from "../../../components/button/button";
import {
  Wrapper,
  BtnsGroup,
  BetButton,
  BetDisplay,
  MeansDisplay,
} from "./dashboard.style";
import { LoadingIndicator } from "../../../components/loadin-indicator/loading-ndicator";

export const Dashboard: FC = () => {
  const { setBet, bet } = useContext(GameContext);
  const { callApi, player, isLoading } = useGameFetch();
  const { message } = useNotification();
  if (player === null) {
    return <LoadingIndicator size="big"></LoadingIndicator>;
  }
  const isDisabled = player?.gameResult || message ? true : false;

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
      {isLoading ? (
        <LoadingIndicator size="small" />
      ) : (
        (player.means > 0 || player.playerBet > 0) && (
          <>
            {player?.isBet && (
              <>
                <BtnsGroup>
                  <Button disabled={isDisabled} onClick={standHandler}>
                    Stand
                  </Button>
                  <Button disabled={isDisabled} onClick={pickHandler}>
                    Pick
                  </Button>
                </BtnsGroup>
                <MeansDisplay>
                  {" "}
                  Your credits: <span>{player?.means} $</span>{" "}
                </MeansDisplay>
              </>
            )}
            {!player.isBet && (
              <BtnsGroup>
                <BetButton disabled={bet ? false : true} onClick={betHandler}>
                  Bet{bet === 0 ? null : <BetDisplay>{bet} $</BetDisplay>}
                </BetButton>
                <RangeSlider
                  value={bet}
                  setValue={setBet}
                  maxRange={player.means ?? 0}
                />
              </BtnsGroup>
            )}
          </>
        )
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
