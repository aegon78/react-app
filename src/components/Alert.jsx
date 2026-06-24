import React from 'react'
import styles from './Alert.module.css'
const Alert = ({children, onClose}) => {
    return (
    <div className='alert alert-warning alert-dismissible'>
        <button
            className={`${styles.btn} btn-close`} data-bs-dismiss="alert" aria-label="Close"
            onClick={onClose}
        >
            x
        </button>
        {children}
    </div>
    )
}

export default Alert