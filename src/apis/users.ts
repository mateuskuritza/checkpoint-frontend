class UsersAPI {
    private apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/users`;
    private basicConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    constructor() {}

    async login(token: string) {
        const res = await fetch(`${this.apiUrl}/authenticate`, {
            ...this.basicConfig,
            method: 'POST',
            body: JSON.stringify({ token }),
        });
        return res.json();
    }
}

export const usersAPI = new UsersAPI();
