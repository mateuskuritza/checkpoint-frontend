import { WorkHours } from '@/@types/workhour';
import { CookiesUtils } from '@/libs/cookies';

class WorkHoursAPI {
    private apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/workhours`;
    private basicConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${CookiesUtils.get('jwt')}`,
        },
    };
    constructor() {}

    async getAll(): Promise<{ workhours: WorkHours }> {
        const res = await fetch(`${this.apiUrl}/`, {
            ...this.basicConfig,
            method: 'GET',
        });

        return {
            workhours: await res.json(),
        };
    }
}

export const workhoursAPI = new WorkHoursAPI();
