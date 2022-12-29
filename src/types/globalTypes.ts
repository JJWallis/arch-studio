export type GenericFunction = <A = any[], B = any>(
   ...args: A extends any[] ? A : [A]
) => B;
