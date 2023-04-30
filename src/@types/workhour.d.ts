import { Optional } from './optional';

export interface WorkHours {
    userToken: string;
    today: Optional<WorkHour, 'end'> | null;
    history: WorkHour[];
}

type WorkHour = {
    id: string;
    start: Date;
    end: Date;
};
