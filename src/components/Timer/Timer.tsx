import { FC, useState } from "react";

const Timer: FC<{ time: Date }> = (props) => {
  const [time, setTime] = useState(props.time.getSeconds());
  const hour = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor((time % 3600) / 60) % 60;

  setInterval(() => {
    setTime((prevTime) => prevTime - 1);
  }, 1000);

  return (
    <div>
      {hour}:{minutes}:{seconds}
    </div>
  );
};

export default Timer;
