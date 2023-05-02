import { employeesAPI } from '@/services/employees';

interface EmployeeInfosProps {
    employeeToken: string;
}

export function EmployeeInfos({ employeeToken }: EmployeeInfosProps) {
    const handleLogout = () => {
        employeesAPI.logout();
        window.location.href = '/';
    };

    return (
        <div className='grid place-items-end'>
            <p className='font-bold text-xs text-whitesmoke'>{employeeToken}</p>
            <p className='font-light text-xs text-silver text-opacity-70'>Usuário</p>
            <p
                className='font-light text-xs text-silver text-opacity-70 cursor-pointer transition-all hover:brightness-200'
                onClick={handleLogout}
            >
                Sair
            </p>
        </div>
    );
}
