import React from 'react'

const Alert = ({children, onClose}) => {
    return (
    <div className='alert alert-warning alert-dismissible'>
        <button
            className="btn-close" data-bs-dismiss="alert" aria-label="Close"
            onClick={onClose}
        >
        </button>
        {children}
    </div>
    )
}

export default Alert