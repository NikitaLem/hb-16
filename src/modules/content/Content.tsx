import { Card } from "./components/Card/Card";

import Cake from "./imgs/cake.jpg";
import Vilka from "./imgs/vilka.png";
import Hearth from "./imgs/hearth.jpg";
import Fishing from "./imgs/fishing.jpg";
import { Arrow } from "./components/Controls/Arrow";
import { useStore } from "../store/useStore";

import "./Content.css";

export const Content = () => {
  const [currentCard, nextCard, prevCard, flippedCardNumber] = useStore((s) => [
    s.currentCard,
    s.nextCard,
    s.prevCard,
    s.flippedCardNumber,
  ]);

  const contentList = [
    {
      text: (
        <>
          Маша!
          <br />
          С днем рождения!
          <br />
          Желаю тебе большого вкусного торта - обязательно со свечами на нем,
          которые зажигали руки любящие и часто тебя обнимающие!
          <br />
          Погаси все свечи (на киберторте их не обязательно гасить все за раз)
        </>
      ),
      img: Cake,
      number: 1,
    },
    {
      text: (
        <>
          Желаю, чтобы твое море оставалось теплым и добрым.
          <br />И рыбы в нем водилось так много, что ее пришлось бы раздавать
          мимозаходимцам!
        </>
      ),
      img: Fishing,
      number: 2,
    },
    {
      text: (
        <>
          Желаю самых хороших друзей!
          <br />
          Чтобы с ними можно было гулять по вечерам, кормить их, и пусть они
          даже обслюнявят твою одежду - ты бы на них не сердилась!
          <br />
          Такие вот они хорошие!
        </>
      ),
      img: Vilka,
      number: 3,
    },
    {
      text: (
        <>
          Это уже четвертый раз, когда я делаю открытку на твой день рождения.
          <br />
          По одной точке нельзя определить куда движется объект или предсказать
          погоду. Но четырех точек достаточно с лихвой!
          <br />
          По ним я точно могу определить одну истину:
          <br />
          Ты солнышко, чудо и самая лучшая в мире!
          <br />И это не мои слова - это то как есть.
          <br />С ДНЕМ РОЖДЕНИЯ!!!
        </>
      ),
      img: Hearth,
      number: 4,
    },
  ];

  return (
    <div className="tw-min-h-screen tw-min-w-full tw-flex tw-flex-col tw-relative">
      {contentList.map(({ text, img, number }) => (
        <div
          key={number}
          className={`tw-absolute tw-h-full tw-w-full tw-flex tw-p-6 card_movable ${
            currentCard < number
              ? "card-right"
              : currentCard > number
              ? "card-left"
              : "card-center"
          }`}
        >
          <Card candleCount={4} img={img} cardNumber={number}>
            {text}
          </Card>
        </div>
      ))}
      {currentCard > 1 && (
        <Arrow
          direction="prev"
          className="tw-absolute tw-left-8 tw-top-1/2 tw-translate-y-[-50%]"
          onClick={prevCard}
        />
      )}
      {currentCard < contentList.length && flippedCardNumber >= currentCard && (
        <Arrow
          direction="next"
          className="tw-absolute tw-right-8 tw-top-1/2 tw-translate-y-[-50%]"
          onClick={nextCard}
        />
      )}
    </div>
  );
};
