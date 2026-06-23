import React from 'react'
import './Alert.css'

const Alert = ({children, onClose}) => {
    return (
    <div className='alert alert-warning alert-dismissible'>
        <button
            className="btn-close" data-bs-dismiss="alert" aria-label="Close"
            onClick={onClose}
        >
            x
        </button>
        {children}
    </div>
    )
}

export default Alert