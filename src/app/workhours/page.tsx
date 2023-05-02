'use client';

import { EmployeeWorkHours } from '@/@types/workhour';
import { EmployeeInfos } from '@/app/workhours/components/EmployeeInfos';
import { HourCounter } from '@/app/workhours/components/HourCounter';
import { Button } from '@/components/Button';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useEmployee } from '@/hooks/useEmployee';
import { workhoursAPI } from '@/services/workhours';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { WorkhoursList } from './components/WorkhoursList';

export default function Workhours() {
    // TODO: refactor this to use libs like react-query or swr
    const [loading, setLoading] = useState<boolean>(false);

    const { employee } = useEmployee();

    const [workhours, setWorkhours] = useState<EmployeeWorkHours>();

    useEffect(() => {
        setLoading(true);

        loadWorkhours();
    }, []);

    const loadWorkhours = () => {
        workhoursAPI
            .getAll()
            .then(({ workhours }) => {
                setWorkhours(workhours);
            })
            .catch((error) => {
                console.error(error);
                toast.error('Algo deu errado ao carregar seus registros de ponto :(');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleStartWork = () => {
        setLoading(true);

        workhoursAPI
            .startWork()
            .then(() => {
                toast.success('Ponto registrado com sucesso!');
                loadWorkhours();
            })
            .catch((error) => {
                console.error(error);
                toast.error('Algo deu errado ao registrar seu ponto :(');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleEndWork = () => {
        setLoading(true);

        workhoursAPI
            .endWork()
            .then(() => {
                toast.success('Ponto registrado com sucesso!');
                loadWorkhours();
            })
            .catch((error) => {
                console.error(error);
                toast.error('Algo deu errado ao registrar seu ponto :(');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <main className='h-full w-full max-w-sm mx-auto flex flex-col gap-y-5 py-20'>
            <div className='w-full flex justify-between items-start'>
                <div className='flex flex-col gap-y-6'>
                    <h1 className='font-bold text-xs text-whitesmoke text-stroke'>Relógio de ponto</h1>

                    <HourCounter startDate={workhours?.today?.startDate} endDate={workhours?.today?.endDate} />
                </div>

                {employee && <EmployeeInfos employee={employee} />}
            </div>

            {workhours?.today?.startDate ? (
                <Button
                    onClick={handleEndWork}
                    textContent='Hora de saída'
                    loadingTextContent='Salvando...'
                    disabled={loading}
                />
            ) : (
                <Button
                    onClick={handleStartWork}
                    textContent='Hora de entrada'
                    loadingTextContent='Salvando...'
                    disabled={loading}
                />
            )}

            <div className='w-full grid place-items-center gap-y-2'>
                <p className='text-whitesmoke text-xs font-bold mr-auto'>Dias anteriores</p>
                {workhours && <WorkhoursList workhours={workhours} />}

                {loading && <LoadingSpinner />}

                {!loading && !workhours && (
                    <p className='text-red text-opacity-75 mt-4'>Erro desconhecido ao carregar as informações :(</p>
                )}

                {workhours && workhours.history.length === 0 && (
                    <p className='text-silver text-opacity-75 mt-4'>Histórico vazio</p>
                )}
            </div>
        </main>
    );
}
