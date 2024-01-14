export function formatMinutes(minutes: number) {
  return minutes < 10 ? `0${minutes}` : `${minutes}`;
}

export function formatSeconds(seconds: number) {
  return seconds < 10 ? `0${seconds}` : `${seconds}`;
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(1, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
