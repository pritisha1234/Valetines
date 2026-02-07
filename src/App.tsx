import { useState } from "react";
import FloatingHearts from "./components/floating-hearts";
import CuteWindow from "./components/fake-window";
import { useEffect } from "react";



function App() {
  const [screen, setScreen] = useState<"start" | "decision" | "final" | "reject">("start");
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);



  useEffect(() => {
    if (screen === "decision") {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [screen]);



  return (
    <div className="pixel-grid h-screen w-full relative">
      {screen === "start" && (
        <FloatingHearts />
      )}


      <div className="border-4 border-black text-center h-full w-full flex flex-col items-center justify-center">

        {/* START SCREEN */}
        {screen === "start" && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl pb-4">💗 HI MY BABY 💗</h1>
            <CuteWindow onCLick={() => { setScreen("decision") }} />

          </div>
        )}
        {showConfetti && (
          <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {Array.from({ length: 45 }).map((_, i) => (
              <span
                key={i}
                className="absolute text-xl animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${-20 - Math.random() * 80}px`, // 👈 start ABOVE screen
                  animationDelay: `${Math.random() * 0.6}s`,
                }}
              >
                {["💖", "💗", "✨", "💞", "🎉"][i % 5]}
              </span>
            ))}
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
              <button className="pixel-button w-50 text-xs h-auto"
                onClick={() => setScreen("final")}>
                💖 YES OFC MY DARLING SWEET GIRL 💖
              </button>

              <button
                className="pixel-button bg-gray-300 w-50 text-xs h-auto"
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`
                }}
                onMouseEnter={() =>
                  setNoPos({
                    x: Math.random() * 300,
                    y: Math.random() * 300,
                  })
                }
                onClick={() => setScreen("reject")}
              >
                NO I HATE YOU AND YOUR WHOLE BLOODLINE
              </button>
            </div>
          </div>
        )}

        {/* FINAL SCREEN */}
        {screen === "reject" && (
          <div className="flex flex-col text-center space-y-6">
            <span className="text-red-500 animate-pulse text-xs">
              HUHHH???
            </span>
            <button className="pixel-button w-50 text-xs h-auto"
              onClick={() => setScreen("decision")}>
              TRY AGAIN 😡
            </button>
          </div>
        )}

        {/* FINAL SCREEN */}
        {screen === "final" && (
          <div className="flex flex-col items-center text-center space-y-6 relative">

            {/* Image + decorations */}
            <div className="relative">
              {/* Top sparkles */}
              <span className="absolute -top-6 -left-6 text-xl animate-pulse">✨</span>
              <span className="absolute -top-8 right-4 text-lg animate-bounce">💖</span>

              {/* Image */}
              <img
                src="/happy.jpg"
                className="w-64 h-64 object-cover rounded-xl border-4 border-pink-300 shadow-lg"
              />

              {/* Bottom hearts */}
              <span className="absolute -bottom-6 -left-4 text-xl animate-bounce">❤️</span>
              <span className="absolute -bottom-2 right-6 text-3xl animate-pulse">✨</span>

              {/* Side hearts */}
              <span className="absolute top-1/2 -left-8 text-lg animate-ping">💗</span>
              <span className="absolute top-1/3 -right-8 text-lg animate-bounce">💞</span>
            </div>

            {/* Caption */}
            <span className="text-red-500 text-s tracking-widest pt-10">
              DAS WHAT I THOUGHT
            </span>
          </div>
        )}


      </div>
    </div>
  );
}

export default App;
