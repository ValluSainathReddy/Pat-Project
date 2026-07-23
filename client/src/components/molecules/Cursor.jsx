import { useEffect, useState } from 'react';

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    const enter = () => setHidden(false);
    const leave = () => setHidden(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseenter', enter);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseenter', enter);
      window.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 backdrop-blur-xl transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}
