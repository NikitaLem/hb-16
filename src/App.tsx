import { useEffect, useState } from "react";
import { usePlayHappyMusic } from "./modules/audio/usePlayHappyMusic";
import { Content } from "./modules/content/Content";
import { GreetingScreen } from "./modules/greeting/GreetingScreen";
import { useStore } from "./modules/store/useStore";

function App() {
  const [started] = useStore((s) => [s.started]);

  const [stage, setStage] = useState<"greeting" | "content">("greeting");

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        setStage("content");
      }, 1500);
    }
  }, [started]);

  usePlayHappyMusic();

  return (
    <div className="tw-w-full tw-max-h-full tw-overflow-hidden">
      {stage === "greeting" && <GreetingScreen />}
      {stage === "content" && <Content />}
    </div>
  );
}

export default App;
