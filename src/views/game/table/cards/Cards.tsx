import React, { FC } from "react";
import { cardNameBuilder } from "../../../../helpers/cardNameBuilder";
import { CardsConteiner, CardStyled } from "./card.styled";

interface Props {
  cards: CardType[] | undefined;
}

export interface CardType {
  _id?: string;
  type: string;
  weight: string;
}

export const Cards: FC<Props> = ({ cards }) => {
  let translateX = -100;
  return (
    <CardsConteiner>
      {cards?.map((card) => {
        translateX += 50;

        return (
          <CardStyled
            translateX={translateX}
            key={card._id}
            imgName={cardNameBuilder(card)}
          />
        );
      })}
    </CardsConteiner>
  );
};
