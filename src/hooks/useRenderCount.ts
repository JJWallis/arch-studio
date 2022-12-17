import { useRef } from 'react';

export const useRenderCount = () => {
   const render = useRef(0);
   console.log(render.current++);
};
