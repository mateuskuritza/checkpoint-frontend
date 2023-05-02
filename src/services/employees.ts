import { CookiesUtils } from '@/libs/cookies';

class EmployeesAPI {
    private apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/employees`;
    private basicConfig: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    async login(token: string): Promise<void> {
        const res = await fetch(`${this.apiUrl}/authenticate`, {
            ...this.basicConfig,
            method: 'POST',
            body: JSON.stringify({ token }),
        });

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const { jwt, name } = await res.json();

        window.localStorage.setItem('employee', JSON.stringify({ name, token }));
        CookiesUtils.set('jwt', jwt, { path: '/' });
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
