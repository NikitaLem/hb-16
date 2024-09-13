import "./Arrow.css";

import ArrowLeft from "../../imgs/left-arrow.svg";
import ArrowRight from "../../imgs/right-arrow.svg";

export const Arrow = ({
  direction,
  className,
  onClick,
}: {
  direction: "prev" | "next";
  className: string;
  onClick: () => void;
}) => {
  return (
    <button className={`${className} arrow-button`} onClick={onClick}>
      <img
        className={`arrow arrow_${direction}`}
        src={direction === "prev" ? ArrowLeft : ArrowRight}
      />
    </button>
  );
};
