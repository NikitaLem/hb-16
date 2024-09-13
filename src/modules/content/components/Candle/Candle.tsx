import { useState } from "react";
import "./Candle.css";

export const Candle = ({ onClick }: { onClick: () => void }) => {
  const [fire, setFire] = useState(true);

  const handleClick = () => {
    if (fire) {
      setFire(false);
      onClick();
    }
  };

  return (
    <div
      className={`fire-icon ${fire && "fire-icon_fire"}`}
      onClick={handleClick}
    ></div>
  );
};
