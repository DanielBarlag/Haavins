import styles from "./thankyou.module.css"

const Thankyou = () => {
    return (<div className={styles.contentContainer}>
        <div className={styles.thankTextContainer}>
            <h1 className={styles.thankText}>Thank</h1>
            <h1 className={styles.youText}>you</h1>
        </div>
        <p className={styles.text}>Your order has been placed. Thank you for supporting our art and your selected charity.</p>
    </div>)
}

export default Thankyou