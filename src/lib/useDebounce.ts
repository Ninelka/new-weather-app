import { debounce } from "lodash";
import { useEffect, useState } from "react";

function useDebounce(value: string, delay?: number): string {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    return debounce(() => setDebouncedValue(value), delay);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
