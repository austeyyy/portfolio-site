// src/types/splinetool.d.ts
declare module '@splinetool/react-spline/next' {
    import { FC, RefObject } from 'react';
    
    export interface SplineProps {
      scene: string;
      [key: string]: any;
    }
    
    const Spline: FC<SplineProps>;
    
    export default Spline;
  }
  
  declare module '@splinetool/runtime' {
    export class Application {
      // Add any methods or properties you use from the runtime
    }
  }