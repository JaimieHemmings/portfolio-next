'use client';

import useMousePosition from './MousePosition';

export default function Cursor() {
  const { clientX, clientY } = useMousePosition();

  return (
    <div className="cursorComponent">
      <div
        id="blob"
        style={{
          left: clientX,
          top: clientY,
        }}
      ></div>
      <div id="blur"></div>
    </div>
  );
}
