import styles from './Login.module.scss'
import logo from '../../../media/logo.svg'

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
                    </form>
                </div>
            </div>
        </>
    )
};

export default Login