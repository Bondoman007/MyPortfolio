import { useEffect, useRef } from "react";
import { Game as PhaserGame } from "phaser";
import { config } from "../game/config";

export function Game() {
  const gameRef = useRef(null);

  useEffect(() => {
    if (!gameRef.current) {
      gameRef.current = new PhaserGame(config);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <div id="game-container" className="w-full  max-w-4xl mx-auto" />;
}
