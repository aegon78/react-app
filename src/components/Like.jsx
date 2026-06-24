import { useState } from 'react'
import { IoHeartSharp, IoHeartOutline } from 'react-icons/io5'

function Like(onClick){
    const [status, setStatus] = useState(false)
    
    if (status) return <IoHeartSharp size='5rem' color='#ff6b81' onClick={()=> setStatus(false)}/>
    return <IoHeartOutline size='5rem' onClick={()=> setStatus(true)}/>

}

export default Like