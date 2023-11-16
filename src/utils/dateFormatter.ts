export function formattedTimer(remainSeconds: number): string {
  const minutes: number = Math.floor(remainSeconds / 60);
  const seconds: number = remainSeconds % 60;
  const formattedMinutes: string = minutes.toString().padStart(2, '0');
  const formattedSeconds: string = seconds.toString().padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}
