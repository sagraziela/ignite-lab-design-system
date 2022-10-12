import { clsx } from 'clsx';

interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
}

export function Text({ size = 'md' }: TextProps) {
    return(
        <span 
        className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm', 
                'text-sm': size === 'md',
                'text-md': size === 'lg', //aplica o font-size global 'text-md' se o size da TextProps for igual a 'lg'.
            }
        )}
        >
            Hello world
        </span>
    )
}