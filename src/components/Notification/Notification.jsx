import styles from './Notification.module.css';

import { useState, useEffect } from 'react';
function Notification({ status, error, message = "Success!" }) {
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsClosed(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <aside className={isClosed ? styles.hide : styles.notification}>
            <div className={styles.notificationHeader}>
                <h6 className={styles.notificationCode}>STATUS CODE: {status}</h6>
                <button className={styles.notificationClose} onClick={() => setIsClosed(true)}>X</button>
            </div>
            <p className={styles.notificationMessage}>{error ? error : message}</p>
        </aside>
    )
}

export default Notification;