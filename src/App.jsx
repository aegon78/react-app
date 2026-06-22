import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
function App() {

  const [alertVisibility, setAlertVisibility] = useState(false)

  return (
    <div>
      {alertVisibility && <Alert onClose={()=> setAlertVisibility(false)}>My alert</Alert>}
      
      <Button onClick={()=> setAlertVisibility(true)}></Button>
    </div>
  )

}

export default App