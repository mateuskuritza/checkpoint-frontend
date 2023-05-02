'use client';

import { employeesAPI } from '@/services/employees';
import { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from '../Button';
import { Input } from '../Input';

export function LoginForm() {
    const [employeeToken, setEmployeeToken] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const token = employeeToken.trim();
        if (!token) return toast.error('Por favor, preencha um código de usuário válido.');

        setLoading(true);

        employeesAPI
            .login(token)
            .then(() => {
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
                value={employeeToken || ''}
                onChange={(e) => setEmployeeToken(e.target.value)}
            />
            <Button textContent='Confirmar' disabled={loading} />
        </form>
    );
}
