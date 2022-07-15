import { Title } from "../../components/title/title";
import { Descriptions, Wrapper, Content, TitleWrapper } from "./home.style";

export const Home = () => {
  return (
    <Wrapper>
      <Content>
        <TitleWrapper>
          <Title big>Black Jack</Title>
          <Title>Rules</Title>
        </TitleWrapper>
        <Descriptions>
          Each participant attempts to beat the dealer by getting a count as
          close to 21 as possible, without going over 21
        </Descriptions>
        <Descriptions>
          It is up to each individual player if an ace is worth 1 or 11. Face
          cards are 10 and any other card is its pip value.
        </Descriptions>
        <Descriptions>
          An ace is worth 1 or 11, whichever is better for the player, Face
          cards are 10 and any other card is its pip value.
        </Descriptions>
        <Descriptions>
          The dealer must draw cards if the total is 16 or less. If the sum is
          17 or more, it must stand.
        </Descriptions>
      </Content>
    </Wrapper>
  );
};
