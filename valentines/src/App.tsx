import { useState } from "react";
import FloatingHearts from "./components/floating-hearts";
import CuteWindow from "./components/fake-window";



function App() {
  const [screen, setScreen] = useState<"start" | "decision" | "final">("start");
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  return (
    <div className="pixel-grid h-screen w-full relative">
      <FloatingHearts />

      <div className="bg-pink-200 border-4 border-black p-8 text-center space-y-6 h-full w-full flex flex-col items-center justify-center">

        {/* START SCREEN */}
        {screen === "start" && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl">💗 HI MY BABY 💗</h1>
            <CuteWindow onCLick={() => { setScreen("decision") }} />



          </div>
        )}

        {/* DESICION SCREEN */}
        {screen === "decision" && (
          <div className="text-center space-y-6">
            <span className="text-red-500 animate-pulse text-xs">
              REC ●●●●●
            </span>

            {/* <h1 className="text-xl">🎬 FINAL SCENE 🎬</h1> */}

            <p className="text-sm">
              Will you be my Valentine?
            </p>

            <div className="flex gap-6 justify-center">
              <button className="pixel-button" onClick={() => setScreen("final")}>
                💖 YES 💖
              </button>

              <button
                className="pixel-button bg-gray-300"
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`
                }}
                onMouseEnter={() =>
                  setNoPos({
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                  })
                }
              >
                💔 NO
              </button>
            </div>
          </div>
        )}

        {/* FINAL SCREEN */}
        {screen === "final" && (
          <div className="text-center space-y-6">
            <span className="text-red-500 animate-pulse text-xs">
              DAS WHAT I THOUGHT
            </span>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
