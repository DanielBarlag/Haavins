import styles from "./charity.module.css"
import bgImage from '../../resources/images/haavins123.png';
import vector from '../../resources/images/Frame 546.png';


const Charity = () => {
    return (
        <>
            <img src={bgImage} className={styles.background}></img>
            <div className={styles.contentContainer}>
                <h1 className={styles.charityHeader}>Charity</h1>
                <div className={styles.textContainer}>
                    <div className={styles.support}>
                        <img src={vector}></img>
                        <h2>Support charity Through Art</h2>
                        <p>X% of our profits of each sale goes to a charitable organization, but here’s the twist.</p>
                    </div>
                    <div className={styles.support}>
                        <img src={vector}></img>
                        <h2>Let the people decide</h2>
                        <p>Each month we let our users vote for which two organizations they want for that months campaign.</p>
                    </div>
                    <div className={styles.support}>
                        <img src={vector}></img>
                        <h2>Choose your cause</h2>
                        <p>On checkout we let you choose which of the chosen organizations you wish to send your % too. You can decide to choose only one, or split them between the two.</p>
                    </div>
                </div>
            </div>
        </>
   
    )
} 

export default Charity