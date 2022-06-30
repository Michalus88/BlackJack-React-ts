import React, { FC, useContext } from "react";
import { RangeSlider } from "../../../components/range-slider/RangeSlider";
import { PlayerDataRes } from "types";
import { Button } from "../../../components/button/button";
import { Wrapper, BtnsGroup, BetButton, BetDisplay } from "./dashboard.style";
import { GameContext } from "../../../providers/GameProvider";

interface Props {
  player: PlayerDataRes | null;
}

export const Dashboard: FC<Props> = ({ player }) => {
  const { setBet, bet } = useContext(GameContext);

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
          <BetButton>
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
