import { useCallback } from "react";

export type ITimeCalculator = {
  isDoubleDigit: boolean;
};

export const useTimeCalculator = ({ isDoubleDigit }: ITimeCalculator) => {
  const timeCalculator = useCallback((duration: number) => {
    const hours = isDoubleDigit
      ? Math.floor(duration / 3600)
          .toString()
          .padStart(2, "0")
      : Math.floor(duration / 3600).toString();
    const minutes = isDoubleDigit
      ? Math.floor((duration - Number(hours) * 3600) / 60)
          .toString()
          .padStart(2, "0")
      : Math.floor((duration - Number(hours) * 3600) / 60).toString();
    const seconds = isDoubleDigit
      ? (duration - Number(hours) * 3600 - Number(minutes) * 60)
          .toString()
          .padStart(2, "0")
      : (duration - Number(hours) * 3600 - Number(minutes) * 60).toString();

    if (!hours) return `${hours}:${minutes}:${seconds}`;
    return `${minutes}:${seconds}`;
  }, []);

  return { timeCalculator };
};
