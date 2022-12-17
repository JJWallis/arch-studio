import React, { useRef, useEffect } from 'react';

type UseClickOutside = <T>(
   elRef: React.RefObject<HTMLElement>,
   callback: T,
   exceptions?: React.RefObject<HTMLElement>
) => void;

export const useClickOutside: UseClickOutside = (
   elRef,
   callback,
   ...exceptions
) => {
   const callbackRef = useRef<typeof callback | null>(null);
   const exceptionsRef = useRef<any>(null);
   exceptionsRef.current = exceptions;
   callbackRef.current = callback;

   useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         const targetElement = e.target as HTMLElement;

         if (
            exceptionsRef.current.some((elementRef: any) =>
               elementRef?.current?.contains(targetElement)
            )
         ) {
            return;
         }

         if (
            !elRef?.current?.contains(targetElement) &&
            callbackRef.current instanceof Function
         )
            callbackRef.current(e);
      };

      console.log('UseEffect running...');

      document.addEventListener('click', handleClickOutside, true);
      return () => {
         document.removeEventListener('click', handleClickOutside, true);
      };
   }, [elRef, callbackRef, exceptionsRef]);
};
