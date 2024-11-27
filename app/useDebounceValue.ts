import { useEffect, useState } from "react";

export const useDebounceValue = (value: string, delayMs: number) => {
  const [debounceValue, setDebounceVealue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceVealue(value);
    }, delayMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delayMs]);

  return debounceValue;
};
