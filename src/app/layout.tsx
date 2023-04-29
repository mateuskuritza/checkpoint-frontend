import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Controle de Ponto',
    description:
        'Registre o histórico de horários de entrada e saída de seus funcionários com facilidade! Nosso sistema de controle de ponto é intuitivo e simples de usar. Gerencie a frequência dos seus colaboradores com praticidade e eficiência. Experimente agora!',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: metadata.title,
    url: 'https://www.exemplo.com.br', // TODO: change this after deploy
    description: metadata.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='pt-br'>
            <body className={inter.className}>{children}</body>
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
