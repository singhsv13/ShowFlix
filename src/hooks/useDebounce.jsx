import { useEffect, useState } from "react";

const useDebounce = (val, delay=300) => {
    const [debounced, setDebounced] = useState(val);

    useEffect(()=>{
      const timer = setTimeout(()=>setDebounced(val), delay);
      return ()=>clearTimeout(timer);
    },[delay, val]);

    return debounced;
  }

  export default useDebounce;