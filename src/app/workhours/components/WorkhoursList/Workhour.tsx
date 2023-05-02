import { WorkHour } from '@/@types/workhour';
import { getTimeDiference } from '@/utils/time-diference';

export function Workhour({ endDate, startDate }: WorkHour) {
    const { hours, minutes, seconds } = getTimeDiference({ endDate, startDate });

    return (
        <div className='rounded bg-silver bg-opacity-5 w-full p-3 flex items-center justify-between'>
            <span className='text-silver text-xs font-medium'>
                {new Date(startDate).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                })}
            </span>
            <span className='text-whitesmoke text-xs font-bold'>{`${hours}h ${minutes}m ${seconds}s`}</span>
        </div>
    );
}
