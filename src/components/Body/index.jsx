import  Carousel  from '../Carousel';
import styles from './Body.module.css'

export const Body = () => {

    return (
        <div className={styles.main}>
            <Carousel  images={[
            "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
            "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
            "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
            "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
            "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"
            ]}/>
        </div>
    );
};