import './inputs.scss'
import { useState, useEffect } from 'react'
import Button from '../button/Button'

import { inputs } from '../../assets/input'
import { useLocation, useHistory } from 'react-router-dom'
import useFetchData from '../../api/api'

const Inputs = (props) => {

    const location = useLocation()
    const history = useHistory()
    const params = location.pathname.split('/')[2]

    const { data } = useFetchData(`https://jsonplaceholder.typicode.com/users/${params}`)


    const [dataInput, setDataInput] =useState({
        name: data?.name,
        username: data?.username,
        email: data?.email,
        street: data?.address.street,
        city: data?.address.city,
        zipcode: data?.address.zipcode,
        phone: data?.phone,
        website: data?.website,
        comments: ''
    })
    
    useEffect(() => {
        setDataInput({
            name: data?.name,
            username: data?.username,
            email: data?.email,
            street: data?.address.street,
            city: data?.address.city,
            zipcode: data?.address.zipcode,
            phone: data?.phone,
            website: data?.website,
        })
    }, [data])

   
    const changeInputValue = (e) => {
        console.log([dataInput.name])
        setDataInput({...dataInput, [e.target.name]: e.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(dataInput))
        history.push('/')
    }


  return (
    <div className="inputs">
        <form className="user__form" onSubmit={e => submitForm(e)}>
            {
                inputs.map((item, i) => (
                    <div key={i} className="inputs__item">
                    <label htmlFor={item.label} key={i}>{item.label}</label>
                    <input
                    name={item.name} 
                    type={item.type} 
                    disabled={props.disableInput}
                    value={dataInput[item.name]}
                    onChange={changeInputValue}
                    required
                    />
                    </div>
                ))
            }
            <label htmlFor="comments">Comment</label>
            <textarea 
            name="comments" 
            cols="30" 
            rows="10" 
            disabled={props.disableInput}
            onChange={changeInputValue}
            ></textarea>
            <div className="btn-submit">
            <Button className={`${props.disableInput ? 'btn-disabled' : 'btn-green'}`} disabled={props.disableInput}>Submit</Button>
            </div>
        </form>
    </div>
  )
}

export default Inputs