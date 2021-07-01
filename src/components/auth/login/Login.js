import styles from './Login.module.scss'
import logo from '../../../media/logo.svg'
import {Link} from 'react-router-dom'

const Login = () => {

    return (
        <>
            <div className={styles.login}>
                <div className={styles.loginform}>
                    <form>
                    <img src={logo} alt='ChoCho' height='100' width='200'></img>
                    <h3>Log in to your account</h3>
                    <input type='text' placeholder='Username'></input>
                    <input type='text' placeholder='Password'></input>
                    <button>Login</button>
                    </form>
                </div>
                <div className={styles.register}><Link to='/signup'>Don't have an account? Register</Link></div>
            </div>
        </>
    )
};

export default Login