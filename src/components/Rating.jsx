import { useState } from 'react'

const Rating = ()=> {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const clicked = (index) => console.log(`star ${index} was clicked`)
    
    const hovered = (direction, index) => console.log('Hovered', direction, index)
    return (

        <div className="rating-container">
            <h2>Rate Your Experience</h2>
            <div className="stars">
                {[1,2,3,4,5].map((star)=>(
                    <span 
                        onClick={()=> setRating(star)}
                        onMouseEnter={()=> setHover(star)}
                        onMouseLeave={()=> setHover(0)}
                        key={star}
                        className={`star ${star <= ( hover || rating ) ? 'active' : ''}`}
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