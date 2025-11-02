import { useState, useEffect } from "react";

const OfflineGame = () => {
  const [target, setTarget] = useState({ x: 100, y: 100 });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(
    () => parseInt(localStorage.getItem("highScore")) || 0
  );

  // Reset everything fresh when mounted (each time offline)
  useEffect(() => {
    setTarget({ x: 100, y: 100 });
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
  }, []);

  const randomPosition = () => {
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 70 + 10;
    return { x, y };
  };

  const handleClick = () => {
    if (gameOver) return;
    setScore((prev) => prev + 1);
    setTarget(randomPosition());
  };

  // Countdown logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  // Update high score if needed
  useEffect(() => {
    if (gameOver && score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  }, [gameOver, score, highScore]);

  return (
    <div
      style={{
        height: "100vh",
        background: "#111",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {!gameOver ? (
        <>
          <div style={{ position: "absolute", top: 20, fontSize: 20 }}>
            ⏱ Time: {timeLeft}s | 🎯 Score: {score} | 🏆 High Score: {highScore}
          </div>
          <div
            onClick={handleClick}
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: "red",
              position: "absolute",
              left: `${target.x}%`,
              top: `${target.y}%`,
              cursor: "pointer",
              transition: "0.2s",
            }}
          />
        </>
      ) : (
        <>
          <h2>🎉 Game Over! Final Score: {score}</h2>
          <h3>
            🏆 {score >= highScore ? "New High Score!" : `Your Highest Score: ${highScore}`}
          </h3>
          <button
            onClick={() => {
              setTimeLeft(30);
              setScore(0);
              setGameOver(false);
            }}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "lime",
              color: "#111",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Restart Game
          </button>
        </>
      )}
    </div>
  );
};

export default OfflineGame;
