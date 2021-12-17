
import { useDispatch } from 'react-redux'
import {registerAction } from '../redux/Actions/Actions'
import React, { useEffect, useState } from 'react'



function registerer() {
  const dispatch = useDispatch()
  const [register, setregister] = useState('')
  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(register);
    dispatch(registerAction ({
      name: new Date().getTime(),
      email: register,
      
    }))
  }
  return (
    <>
            <div className='bold-line'></div>
            <div className='container'>
                <div className='window'>
                    <div className='overlay'></div>
                    <div className='content'>
                        <div className='welcome'>Hello There!</div>
                        <div className='subtitle'>To receive notifications about the hottest news u need to subscribe in our newsletter.</div>
                        <div className='input-fields'>
                            <input type='text' placeholder='First Name' className='input-line full-width'></input>
                            <input type='text' placeholder='Last Name' className='input-line full-width'></input>
                            <input type='email' placeholder='Email' className='input-line full-width'></input>

                        </div>

                        <div>
                            <button className='ghost-round full-width'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
}


export default registerer;