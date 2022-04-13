import { useState } from 'react'
import Button from '../components/button/Button'
import Inputs from '../components/inputs/Inputs'

const Detail = () => {
  const [disableInput, setDisableInput] = useState(true)

  return (
    <div className="content">
        <div className="profile">
            <div className="title">
                <h2>User Profile</h2>
            </div>
            <div className="profile__btn">
                <Button onClick={e => setDisableInput(false)}>Edit</Button>
            </div>
        </div>
        <Inputs disableInput={disableInput}/>
    </div>
  )
}

export default Detail