const Rating = ()=> {

    const clicked = (index) => console.log(`star ${index} was clicked`)
    
    const hovered = (direction, index) => console.log('Hovered', direction, index)
    return (

        <div className="rating-container">
            <h2>Rate Your Experience</h2>
            <div className="stars">
                {[1,2,3,4,5].map((star, index)=>(
                    <span 
                        onClick={()=> clicked(index)}
                        onMouseEnter={()=> hovered('enter', index)}
                        onMouseLeave={()=> hovered('leave', index)}
                        key={ star }
                        className="star"
                    >
                        { '\u2605' }
                    </span>
                ))}
            </div>
        </div>
    )
}

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'Arial',
        padding: '20px',
        // color: '#f00'
    },
}
export default Rating