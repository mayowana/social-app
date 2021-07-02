import styles from './Signup.module.scss'
import logo from '../../../media/logo.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    return (
        <>
        <div className={styles.signup}>
                <div className={styles.signupform}>
                    <form>
                    <img src={logo} alt='ChoCho' height='100' width='200'></img>
                    <h3>Create an account</h3>
                    <input type='text' placeholder='First name' value={fname} onChange={(e) => setFname(e.target.value)}></input>
                    <input type='text' placeholder='Last name' value={lname} onChange={(e) => setLname(e.target.value)}></input>
                    <input type='email' placeholder='Email' value={user} onChange={(e) => setUser(e.target.value)}></input>
                    <input type='password' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)}></input>
                    <button>Sign up</button>
                    </form>
                </div>
                <div className={styles.login}><Link to='/'>Already have an account? Log in</Link></div>
            </div>
        </>
    )
};

export default Signup