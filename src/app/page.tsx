'use client';

import { LoginForm } from '@/components/LoginForm';
import { Logo } from '@/components/Logo';

export default function Home() {
    return (
        <main className='h-full flex flex-col items-center justify-evenly'>
            <Logo />
            <LoginForm />
        </main>
    );
}
