import styles from './Header.module.scss'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <div>
                <nav>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <Link></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;