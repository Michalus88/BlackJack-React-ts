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

export const Cards: FC<Props> = ({ cards }) => (
  <CardsConteiner>
    {cards?.map((card) => (
      <CardStyled key={card._id} imgName={cardNameBuilder(card)} />
    ))}
  </CardsConteiner>
);
