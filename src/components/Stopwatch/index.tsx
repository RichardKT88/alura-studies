import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function StopWatch({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();
  useEffect(() => {
    if (selected?.time) setTime(timeToSeconds(selected.time));
  }, [selected]);

  function countDown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countDown(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro.</p>

      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => countDown(time)}>Começar!</Button>
    </div>
  );
}
