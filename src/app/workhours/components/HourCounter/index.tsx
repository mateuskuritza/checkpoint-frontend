import { getTimeDiference } from '@/utils/time-diference';
import { useEffect, useState } from 'react';

interface HourCounterProps {
    startDate?: Date;
    endDate?: Date;
}

export function HourCounter({ startDate, endDate }: HourCounterProps) {
    const [timeDiferrence, setTimeDiferrence] = useState<string>(() => {
        if (!startDate) return '0h 0m 0s';

        const { hours, minutes, seconds } = getTimeDiference({
            startDate,
            endDate: endDate || new Date(),
        });

        return `${hours}h ${minutes}m ${seconds}s`;
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!startDate || endDate) return;

            const { hours, minutes, seconds } = getTimeDiference({
                startDate,
                endDate: new Date(),
            });

            setTimeDiferrence(`${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [timeDiferrence, startDate, endDate]);

    return (
        <div className='font-bold text-2xl text-whitesmoke'>
            <p className='text-2x'>{timeDiferrence}</p>
            <p className='text-xs'>Horas de hoje</p>
        </div>
    );
}
