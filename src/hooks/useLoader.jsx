import { useState, useEffect } from "react";

export function useLoader(data, delay = 500) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [data, delay]);

  return loading;
}
