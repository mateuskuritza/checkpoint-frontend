import { CookiesUtils } from '@/libs/cookies';

class EmployeesAPI {
    private apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/employees`;
    private basicConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    constructor() {}

    async login(token: string): Promise<{ jwt: string }> {
        const res = await fetch(`${this.apiUrl}/authenticate`, {
            ...this.basicConfig,
            method: 'POST',
            body: JSON.stringify({ token }),
        });

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const { jwt } = await res.json();

        CookiesUtils.set('jwt', jwt, { path: '/' });
        return { jwt };
    }

    logout(): void {
        CookiesUtils.remove('jwt');
    }

    async is_logged(jwt: string): Promise<boolean> {
        const res = await fetch(`${this.apiUrl}/is_logged`, {
            ...this.basicConfig,
            method: 'POST',
            body: JSON.stringify({ jwt }),
        });

        if (!res.ok) {
            return false;
        }

        return true;
    }
}

export const employeesAPI = new EmployeesAPI();
