import styles from './Home.module.scss'
import Header from './header/Header';
import Homebar from './homebar/Homebar';
import Homebox from './homebox/Homebox';

const Home = () => {

    return (
        <> 
        <div>
            <Header />
        </div>
            <div className={styles.home}>
                <div className={styles.homebar}>
                    <Homebar />
                </div>
                <div className={styles.homebox}>
                    <Homebox />
                </div>
                <div className={styles.widgets}></div>
            </div>
        </>
    )
};

export default Home; 