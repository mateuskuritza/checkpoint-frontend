import { Optional } from './optional';

export interface EmployeeWorkHours {
    today: Optional<WorkHour, 'endDate'> | null;
    history: WorkHour[];
}

export type WorkHour = {
    id: string;
    startDate: Date;
    endDate: Date;
};
