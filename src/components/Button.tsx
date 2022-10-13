import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode; //Qqr coisa dentro do React válida como children.
    asChild?: boolean;
}

export function Button({ children, asChild = false, className, ...props }: ButtonProps) {

    const Comp = asChild ? Slot : 'button';
    //o slot pega todas as propriedades aplicadas ao Comp e as transfere para o 1º componente que vem dentro do children.

    return(
        <Comp 
        className={clsx(
            'py-3 px-4 bg-cyan-500 font-semibold text-black text-sm rounded w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
            className
        )}
        {...props}
        >
            {children}
        </Comp>
    )
}