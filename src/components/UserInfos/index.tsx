import { usersAPI } from '@/services/users';

interface UserInfosProps {
    userToken: string;
}

export function UserInfos({ userToken }: UserInfosProps) {
    const handleLogout = () => {
        usersAPI.logout();
        window.location.href = '/';
    };

    return (
        <div className='grid place-items-end'>
            <p className='font-bold text-xs text-whitesmoke'>{userToken}</p>
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
