

function Button({color = "success", children, onClick}){
    return(
    <button
        className={'btn btn-' + color}
        onClick={onClick}
        
    >
    Show Alert
    </button>
    )
}

export default Button