import { useEffect, useState, Dispatch, SetStateAction } from "react";

type ResponseUsePersistedState<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  defaultValue: unknown,
): ResponseUsePersistedState<T> {
  const [state, setState] = useState(() => {
    const getLocalStateStorage = localStorage.getItem(key);

    if (getLocalStateStorage) {
      return JSON.parse(getLocalStateStorage);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
