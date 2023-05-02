import { Employee } from '@/@types/employee';
import { CookiesUtils } from '@/libs/cookies';
import { useEffect, useState } from 'react';

export function useEmployee() {
    const [employee, setEmployee] = useState<Employee>();

    useEffect(() => {
        const employee = window.localStorage.getItem('employee');
        if (!employee) {
            CookiesUtils.remove('jwt');
            window.location.href = '/';
        }

        setEmployee(JSON.parse(String(employee)));
    }, []);

    return { employee };
}
