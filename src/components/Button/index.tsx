import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    textContent: string;
    loadingTextContent?: string;
}

export function Button({ textContent, loadingTextContent = 'Aguarde...', disabled, ...rest }: ButtonProps) {
    return (
        <button
            className='text-charcoal font-bold text-base bg-orange py-3 rounded w-full max-w-sm disabled:bg-silver hover:opacity-90'
            disabled={disabled}
            {...rest}
        >
            {disabled ? loadingTextContent : textContent}
        </button>
    );
}
