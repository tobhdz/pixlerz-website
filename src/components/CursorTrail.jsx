import { useEffect, useState, useRef } from "react";
import "./CursorTrail.css";

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const updatePosition = () => {
      // Interpolación suave
      currentPosition.current.x +=
        (targetPosition.current.x - currentPosition.current.x) * 0.15;
      currentPosition.current.y +=
        (targetPosition.current.y - currentPosition.current.y) * 0.15;

      setPosition({
        x: currentPosition.current.x,
        y: currentPosition.current.y,
      });

      animationFrameId.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      className="cursor-trail"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default CursorTrail;
