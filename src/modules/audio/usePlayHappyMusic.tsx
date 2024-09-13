import { useEffect, useMemo } from "react";
import HappyMusic from "./happy-piano.mp3";
import { useStore } from "../store/useStore";

export const usePlayHappyMusic = () => {
  const [started] = useStore((s) => [s.started]);

  const audio = useMemo(() => new Audio(HappyMusic), []);

  useEffect(() => {
    if (started) {
      audio.loop = true;
      audio.play();
    }
  }, [audio, started]);
};
