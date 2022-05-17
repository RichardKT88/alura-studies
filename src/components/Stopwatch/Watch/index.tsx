import style from "./Watch.module.scss";

interface Props {
  time: number | undefined;
}
export default function Watch({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTen, minuteUnity] = String(minutes).padStart(2, "0");
  const [secondTen, secondUnity] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.watchNumber}>{minuteTen}</span>
      <span className={style.watchNumber}>{minuteUnity}</span>
      <span>:</span>
      <span className={style.watchNumber}>{secondTen}</span>
      <span className={style.watchNumber}>{secondUnity}</span>
    </>
  );
}
