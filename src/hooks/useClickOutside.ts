import React, { useEffect } from 'react';

type Handler = () => void;

const useClickOutside = <T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  handler: Handler
) => {
  useEffect(() => {
    const el = ref.current;

    const handleClick = (e: MouseEvent) => {
      if (!el || el.contains(e.target as Node)) {
        return;
      }
      handler();
    };

    window.addEventListener('mouseup', handleClick);

    return () => {
      window.removeEventListener('mouseup', handleClick);
    };
  }, [ref, handler]);
};

export default useClickOutside;
