'use client';

import { usersAPI } from '@/apis/users';
import { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from '../Button';
import { Input } from '../Input';

export function LoginForm() {
    const [userToken, setUserToken] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const token = userToken.trim();
        if (!token) return toast.error('Por favor, preencha um código de usuário válido.');

        setLoading(true);

        usersAPI
            .login(token)
            .then(({ jwt }) => {
                document.cookie = `jwt=${jwt}; path=/;`;
                window.location.href = '/workhours';
            })
            .catch((error) => {
                console.log({ error });
                toast.error('Algo deu errado com seu login :(');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form className='w-full grid place-items-center gap-y-6' onSubmit={handleSubmit}>
            <Input
                id='user_code'
                name='user_code'
                placeholder='Código do usuário'
                example='4SXXFMf'
                type='text'
                value={userToken || ''}
                onChange={(e) => setUserToken(e.target.value)}
            />
            <Button textContent='Confirmar' disabled={loading} />
        </form>
    );
}
