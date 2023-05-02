import { Montserrat } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
    title: 'Controle de Ponto',
    description:
        'Registre o histórico de horários de entrada e saída de seus funcionários com facilidade! Nosso sistema de controle de ponto é intuitivo e simples de usar. Gerencie a frequência dos seus colaboradores com praticidade e eficiência. Experimente agora!',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: metadata.title,
    url: 'https://checkpoint-frontend-one.vercel.app/',
    description: metadata.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='pt-br'>
            <body className={montserrat.className + ' bg-charcoal w-screen h-screen'}>
                <Toaster />
                {children}
            </body>
            <Script
                id='json-ld'
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
        </html>
    );
}
