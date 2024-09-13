import { CSSTransition } from "react-transition-group";
import { useStore } from "../store/useStore";
import Cake from "./cake.svg";
import { useRef } from "react";

import "./GreetingScreen.css";

export const GreetingScreen = () => {
  const [started, setStarted] = useStore((s) => [s.started, s.setStarted]);
  const ref = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={ref}
        in={started}
        classNames="cake"
        addEndListener={() => ({})}
      >
        <div
          ref={ref}
          className="tw-min-h-full tw-min-w-full tw-flex tw-justify-center tw-items-center tw-overflow-hidden"
        >
          <button onClick={() => setStarted(true)}>
            <img src={Cake} />
          </button>
        </div>
      </CSSTransition>
    </>
  );
};
