export class CookiesUtils {
    constructor() {}

    static set(name: string, value: string, options: { path: string }): void {
        document.cookie = `${name}=${value};path=${options.path}`;
    }

    static get(name: string): string | null {
        const cookie = document.cookie
            .split('; ')
            .find((cookie) => cookie.startsWith(name))
            ?.split('=')[1];
        if (!cookie) return null;
        return cookie.split('=')[1];
    }

    static remove(name: string): void {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
}
