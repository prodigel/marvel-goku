import { useEffect } from "react";

const useDebouncedAction = (newValue: string, callback: () => void) => {
  useEffect(() => {
    const handler = setTimeout(() => callback(), 500);

    return () => clearTimeout(handler);
  }, [newValue, callback]);
};

export default useDebouncedAction;
