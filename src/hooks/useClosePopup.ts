import React, { useEffect } from 'react';

type Handler = () => void;

const useClosePopup = <T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  handler: Handler
) => {
  useEffect(() => {
    const el = ref.current;

    const handleClick = (e: MouseEvent) => {
      if (!el || el.contains(e.target as Node)) {
        return;
      }
      console.log('el', el);
      console.log('e', el.contains(e.target as Node));
      handler();
    };

    const handlePress = (e: KeyboardEvent) => {
      if (!el) {
        return;
      }
      console.log('eee', el);

      if (e.key === 'Escape') {
        handler();
      }
    };

    window.addEventListener('mouseup', handleClick);
    window.addEventListener('keyup', handlePress);

    return () => {
      window.removeEventListener('mouseup', handleClick);
      window.removeEventListener('keyup', handlePress);
    };
  }, [ref, handler]);
};

export default useClosePopup;
