import { CardType } from "../views/game/table/cards/Cards";

export const cardNameBuilder = ({ type, weight }: CardType) =>
  `${weight}_of_${type}.png`;
