import { UserWorkHours } from '@/@types/workhour';
import { CookiesUtils } from '@/libs/cookies';

class WorkHoursAPI {
    private apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/workhours`;
    constructor() {}

    async getAll(): Promise<{ workhours: UserWorkHours }> {
        const res = await fetch(`${this.apiUrl}/`, {
            ...this.basicConfig(),
            method: 'GET',
        });

        return {
            workhours: await res.json(),
        };
    }

    async startWork(): Promise<{ workhours: UserWorkHours }> {
        const res = await fetch(`${this.apiUrl}/start`, {
            ...this.basicConfig(),
            method: 'POST',
        });

        return {
            workhours: await res.json(),
        };
    }

    async endWork(): Promise<{ workhours: UserWorkHours }> {
        const res = await fetch(`${this.apiUrl}/end`, {
            ...this.basicConfig(),
            method: 'POST',
        });

        return {
            workhours: await res.json(),
        };
    }

    private basicConfig() {
        return {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${CookiesUtils.get('jwt')}`,
            },
        };
    }
}

export const workhoursAPI = new WorkHoursAPI();