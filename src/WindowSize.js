import { useEffect, useState } from "react";

export default function WindowSize() {
  const [heightAndWidth, setHeightAndWidth] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  function handleResize() {
    setHeightAndWidth([window.innerWidth, window.innerHeight]);
  }

  useEffect(
    function () {
      window.addEventListener("resize", handleResize);

      return function () {
        window.removeEventListener("resize", handleResize);
      };
    },
    [heightAndWidth]
  );

  return (
    <div>
      <p>Ширина окна: {heightAndWidth[0]}px</p>
      <p>Высота окна: {heightAndWidth[1]}px</p>
    </div>
  );
}
