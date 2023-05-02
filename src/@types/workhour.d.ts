import { Optional } from './optional';

export interface EmployeeWorkHours {
    employeeToken: string;
    today: Optional<WorkHour, 'end'> | null;
    history: WorkHour[];
}

export type WorkHour = {
    id: string;
    start: Date;
    end: Date;
};
