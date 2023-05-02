import { EmployeeWorkHours } from '@/@types/workhour';
import { CookiesUtils } from '@/libs/cookies';

class WorkHoursAPI {
    private apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/workhours`;

    async getAll(): Promise<{ workhours: EmployeeWorkHours }> {
        const res = await fetch(`${this.apiUrl}/`, {
            ...this.basicConfig(),
            method: 'GET',
        });

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        return {
            workhours: await res.json(),
        };
    }

    async startWork(): Promise<void> {
        const res = await fetch(`${this.apiUrl}/start`, {
            ...this.basicConfig(),
            method: 'POST',
        });

        if (!res.ok) {
            throw new Error(res.statusText);
        }
    }

    async endWork(): Promise<void> {
        const res = await fetch(`${this.apiUrl}/end`, {
            ...this.basicConfig(),
            method: 'POST',
        });

        if (!res.ok) {
            throw new Error(res.statusText);
        }
    }

    private basicConfig(): RequestInit {
        return {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${CookiesUtils.get('jwt')}`,
            },
            mode: 'no-cors',
        };
    }
}

export const workhoursAPI = new WorkHoursAPI();
