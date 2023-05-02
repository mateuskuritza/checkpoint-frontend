import { Employee } from '@/@types/employee';
import { employeesAPI } from '@/services/employees';

interface EmployeeInfosProps {
    employee: Employee;
}

export function EmployeeInfos({ employee }: EmployeeInfosProps) {
    const handleLogout = () => {
        employeesAPI.logout();
        window.location.href = '/';
    };

    return (
        <div className='grid place-items-end'>
            <p className='font-bold text-xs text-whitesmoke'>{employee.token}</p>
            <p className='font-light text-xs text-silver text-opacity-70'>{employee.name}</p>
            <p
                className='font-light text-xs text-silver text-opacity-70 cursor-pointer transition-all hover:brightness-200'
                onClick={handleLogout}
            >
                Sair
            </p>
        </div>
    );
}
