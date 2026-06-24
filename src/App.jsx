import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import Like from './components/Like'

function App() { 

  // const [alertVisibility, setAlertVisibility] = useState(false)

  return (
    <div>
      {
        <Like onClick={ ()=> console.log('clicked')}/>
      /* {alertVisibility && <Alert onClose={()=> setAlertVisibility(false)}>My alert</Alert>}
      
      <Button onClick={()=> setAlertVisibility(true)}></Button> */
      }
    </div>
  )

}

export default App