import styles from './Home.module.scss'

const Home = () => {

    return (
        <> 
        <div>
            <nav></nav>
        </div>
            <div className={styles.home}>
                <div className={styles.homebar}></div>
                <div className={styles.homebox}></div>
                <div className={styles.widgets}></div>
            </div>
        </>
    )
};

export default Home; 