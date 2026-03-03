import { useEffect, useRef } from "react";
import "./CursorTrail.css";

const CursorTrail = () => {
  const trailRef = useRef(null);
  const currentPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const updatePosition = () => {
      currentPosition.current.x +=
        (targetPosition.current.x - currentPosition.current.x) * 0.15;
      currentPosition.current.y +=
        (targetPosition.current.y - currentPosition.current.y) * 0.15;

      if (trailRef.current) {
        trailRef.current.style.left = `${currentPosition.current.x}px`;
        trailRef.current.style.top = `${currentPosition.current.y}px`;
      }

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
      ref={trailRef}
      className="cursor-trail"
    />
  );
};

export default CursorTrail;
