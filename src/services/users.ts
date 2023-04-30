import { CookiesUtils } from '@/libs/cookies';

class UsersAPI {
    private apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/users`;
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
        const { jwt } = await res.json();
        CookiesUtils.set('jwt', jwt, { path: '/' });
        return { jwt };
    }

    logout(): void {
        CookiesUtils.remove('jwt');
    }

    async is_logged(jwt: string): Promise<boolean> {
        try {
            await fetch(`${this.apiUrl}/is_logged`, {
                ...this.basicConfig,
                method: 'POST',
                body: JSON.stringify({ jwt }),
            });
            return true;
        } catch {
            return false;
        }
    }
}

export const usersAPI = new UsersAPI();
