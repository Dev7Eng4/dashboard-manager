import React, { useEffect, useLayoutEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number, clear?: boolean) => {
  const savedCallback = useRef(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // if (!delay && delay !== 0) {
    //   return;
    // }

    const id = setInterval(() => callback(), delay);

    if (clear) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [delay, clear]);
};

export default useInterval;
