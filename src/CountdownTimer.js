import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [countdown, setCountdown] = useState(10);

  useEffect(
    function () {
      const timer = setTimeout(function () {
        if (countdown > 0) {
          setCountdown((countdown) => countdown - 1);
        }
      }, 1000);

      return function () {
        clearTimeout(timer);
      };
    },
    [countdown]
  );

  return (
    <div>
      <h1> Countdown: {countdown}</h1>
    </div>
  );
}
