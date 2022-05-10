import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";

export default function StopWatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro.</p>
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}