import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    example?: string;
}

export function Input({ id, name, type, placeholder, example, ...rest }: InputProps) {
    return (
        <div className='relative w-full max-w-sm'>
            <input
                id={id}
                name={name}
                type={type}
                className='bg-midnight px-3 py-2 rounded h-14 w-full peer text-white text-xl font-semibold placeholder:opacity-0'
                placeholder={placeholder}
                {...rest}
            />
            <label
                htmlFor={name}
                className='absolute left-0 -top-5 h-4 transition-all peer-focus:-top-5 peer-focus:left-0 peer-focus:h-4 peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 peer-placeholder-shown:h-14 overflow-hidden'
            >
                <p className='text-white text-xs font-light'>{placeholder}</p>
                {example && <p className='text-white text-xl font-semibold'>{example}</p>}
            </label>
        </div>
    );
}
