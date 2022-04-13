import './inputs.scss'
import { useState } from 'react'

// import { inputs } from '../../assets/input'
import { useLocation } from 'react-router-dom'
import useFetchData from '../../api/api'

const Inputs = (props) => {

    const location = useLocation()
    const params = location.pathname.split('/')[2]

    const { data } = useFetchData(`https://jsonplaceholder.typicode.com/users/${params}`)

    console.log(data)


    const inputs = [
        {
            label: 'name',
            type: 'text',
            name: 'name',
            content: data?.name
        },
        {
            label: 'username',
            type: 'text',
            name: 'username',
            content: data?.username
        },
        {
            label: 'email',
            type: 'email',
            name: 'email',
            content: data?.email
        },
        {
            label: 'street',
            type: 'text',
            name: 'street',
            content: data?.address.street
        },
        {
            label: 'city',
            type: 'text',
            name: 'city',
            content: data?.address.city
        },
        {
            label: 'zipcode',
            type: 'text',
            name: 'zipcode',
            content: data?.address.zipcode
        },
        {
            label: 'phone',
            type: 'text',
            name: 'phone',
            content: data?.phone
        },
        {
            label: 'website',
            type: 'text',
            name: 'website',
            content: data?.website
        },
    ]

  return (
    <div className="inputs">
        <form className="user__form">
            {
                inputs.map((item, i) => (
                    <div key={i} className="inputs__item">
                    <label htmlFor={item.label} key={i}>{item.label}</label>
                    <input 
                    type={item.type} 
                    disabled={props.disableInput} 
                    value={item.content}
                    required
                    />
                    </div>
                ))
            }
            {/* <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <label htmlFor="username">User name</label>
            <input type="text" name="username"/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="street">Street</label>
            <input type="text" name="street"/>
            <label htmlFor="city">City</label>
            <input type="text" name="city"/>
            <label htmlFor="street">Street</label>
            <input type="text" name="zipcode"/>
            <label htmlFor="street">Street</label>
            <input type="text" name="phone"/>
            <label htmlFor="street">Street</label>
            <input type="text" name="website"/> */}
            <label htmlFor="comments">Comment</label>
            <textarea name="comments" id="" cols="30" rows="10"></textarea>
        </form>
    </div>
  )
}

export default Inputs