import { UserWorkHours } from '@/@types/workhour';
import { Workhour } from './Workhour';

interface WorkhoursListProps {
    workhours: UserWorkHours;
}

export function WorkhoursList({ workhours }: WorkhoursListProps) {
    return (
        <div className='w-full grid place-items-center gap-y-2'>
            {workhours.history.map(({ id, ...props }) => (
                <Workhour key={id} id={id} {...props} />
            ))}
        </div>
    );
}
