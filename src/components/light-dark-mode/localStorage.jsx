import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      console.log(currentValue);
    } catch (error) {
      console.log(error);
    }
  });

  return;
}
