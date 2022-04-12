import React from 'react'
import Button from '../components/button/Button'

const Detail = () => {
  return (
    <div className="content">
        <div className="profile">
            <div className="title">
                <h2>User Profile</h2>
            </div>
            <div className="profile__btn">
                <Button>Edit</Button>
            </div>
        </div>
    </div>
  )
}

export default Detail