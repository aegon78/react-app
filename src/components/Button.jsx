import styles from './Button.module.css'

function Button({color = "success", children, onClick}){
    return(
    <button
        className={`${styles.btn} btn-` + color}
        onClick={onClick}
        
    >
    Show Alert
    </button>
    )
}

export default Button