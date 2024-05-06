import { createContext } from "react";


export type ContextCartCountType = {
    contextCartCount: number;
    // setContextCartCount: Function; (ou poderia ser assim caso não resolvesse tipar)
    setContextCartCount: (contextCartCount: number) => void;
}

export const ContextCartCount = createContext<ContextCartCountType>({
    contextCartCount: 0,
    setContextCartCount: () => { }
})