import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './../hook/useAuth';

const LoginPage = () => {
    const {setLogin} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const fromPage = location.state?.from?.pathname || '/'
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const user = form.username.value
        setLogin(user, () => {
            navigate(fromPage, {
                replace: true
            })
        })
    }
    return (<>
        <h1>Login form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='text'>
                Login
            </label>
            <input type="text" id='text' name='username' />
            <button>Login</button>
        </form>    
        </>);
}

export default LoginPage;