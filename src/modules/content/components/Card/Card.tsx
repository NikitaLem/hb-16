import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { Candle } from "../Candle/Candle";
import { useStore } from "../../../store/useStore";

import "./Card.css";

export const Card = ({
  children,
  candleCount,
  img,
  cardNumber,
}: {
  children: ReactNode;
  candleCount: number;
  img: string;
  cardNumber: number;
}) => {
  const ref = useRef(null);
  const [extinguishedCandles, setExtinguishedCandles] = useState(0);

  const [flippedCardNumber, setFlippedCardNumber] = useStore((s) => [
    s.flippedCardNumber,
    s.setFlippedCardNumber,
  ]);

  const flip = useMemo(
    () => extinguishedCandles === candleCount,
    [candleCount, extinguishedCandles]
  );

  useEffect(() => {
    if (flip) {
      setTimeout(() => {
        setFlippedCardNumber(cardNumber);
      }, 700);
    }
  }, [cardNumber, flip, setFlippedCardNumber]);

  return (
    <CSSTransition
      nodeRef={ref}
      in={flip}
      classNames="flip"
      addEndListener={() => ({})}
    >
      <div
        ref={ref}
        className="tw-min-h-full tw-min-w-full tw-p-4 tw-flex tw-items-center tw-justify-center 
				tw-text-gray-700 tw-text-xl tw-bg-red-200 tw-flex-col tw-text-center card"
      >
        {cardNumber > flippedCardNumber && (
          <div className="tw-flex tw-gap-4">
            {Array(candleCount)
              .fill(null)
              .map((_, index) => (
                <Candle
                  key={index}
                  onClick={() => {
                    setExtinguishedCandles((cur) => cur + 1);
                  }}
                />
              ))}
          </div>
        )}
        {cardNumber <= flippedCardNumber ? (
          <img className="tw-h-full tw-w-auto" src={img} />
        ) : (
          <div className="tw-max-w-[500px]">{children}</div>
        )}
      </div>
    </CSSTransition>
  );
};
