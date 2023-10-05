import { Taimer } from '../Taimer';
import styles from './Body.module.css'

export const Body = () => {

    return (
        <div className={styles.main}>
            <Taimer/>
        </div>
    );
};