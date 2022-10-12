import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode; //Qqr coisa dentro do React válida como children.
    asChild?: boolean;
}

export function Heading({ size = 'md', children, asChild = false }: HeadingProps) {

    const Comp = asChild ? Slot : 'h2';
    //o slot pega todas as propriedades aplicadas ao Comp e as transfere para o 1º componente que vem dentro do children.

    return(
        <Comp 
        className={clsx(
            'text-gray-100 font-sans font-bold',
            {
                'text-lg': size === 'sm', 
                'text-xl': size === 'md',
                'text-2xl': size === 'lg', //aplica o font-size global 'text-md' se o size da TextProps for igual a 'lg'.
            }
        )}
        >
            {children}
        </Comp>
    )
}