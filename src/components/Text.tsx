import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode; //Qqr coisa dentro do React válida como children.
    asChild?: boolean;
    className?: string;
}

export function Text({ size = 'md', children, asChild = false, className }: TextProps) {

    const Comp = asChild ? Slot : 'span';
    //o slot pega todas as propriedades aplicadas ao Comp e as transfere para o 1º componente que vem dentro do children.

    return(
        <Comp 
        className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm', 
                'text-sm': size === 'md',
                'text-md': size === 'lg', //aplica o font-size global 'text-md' se o size da TextProps for igual a 'lg'.
            },
            className
        )}
        >
            {children}
        </Comp>
    )
}