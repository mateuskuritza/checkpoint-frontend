export class CookiesUtils {
    constructor() {}

    static set(name: string, value: string, options: { path: string }): void {
        document.cookie = `${name}=${value};path=${options.path}`;
    }

    static get(name: string): string | undefined {
        const cookie = document.cookie
            .split('; ')
            .find((cookie) => cookie.startsWith(name))
            ?.split('=')[1];
        return cookie;
    }

    static remove(name: string): void {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
}
