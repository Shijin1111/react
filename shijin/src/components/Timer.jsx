import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // 🧼 Cleanup interval when component unmounts
    return () => clearInterval(timerId);
  }, []);

  return (
    <div style={{ border: '1px solid blue', padding: '15px', margin: '10px' }}>
      <h2>⏱ Timer</h2>
      <p>Elapsed time: {seconds} seconds</p>
    </div>
  );
}

export default Timer;
