import { useEffect } from "react";
import { useAuthStore } from "../Store/auth.store"


export const LoginPages = () => {

    const authStatus = useAuthStore(state => state.status);
    const user = useAuthStore(state => state.user);

    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);

    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 1500);
    }, [])

    if (authStatus === 'checking') {
        return <h3>Login...</h3>
    }
    return (
        <>
            <h3>Login Pages</h3>

            {(authStatus === 'authenticated')
                ? <div>Autenticado como: {JSON.stringify(user, null, 2)}</div>
                : <div>No autentificado</div>
            }

            {(authStatus === 'authenticated')
                ? (<button onClick={logout}>Logout</button>)
                : (<button onClick={() => login('fernando@google.com', '123456')}>Login</button>)
            }

        </>
    )
}
