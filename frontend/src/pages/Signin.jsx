import React from 'react'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import BottomWarning from '../components/BottomWarning'
import { useNavigate } from 'react-router-dom'


export default function Signin() {
    const navigate = useNavigate(); 
  return (
    <div className='bg-gray-100 h-screen flex justify-center'>
        <div className='flex flex-col justify-center '>
            <div className='rounded-lg bg-white w-96 text-center p-2 h-max px-4' >
            <Heading label="Sign In" />
            <SubHeading label="Enter your credentials to access your account." />
            <InputBox label="Email" placeholder=" johndoe@xyz.com" />
            <InputBox label="Password" placeholder="123456" />
            <div className='pt-4'>
            <Button label="Sign In" onClick={ () => {
                                localStorage.setItem("token", response.data.token)
                                localStorage.removeItem("token")
                
                            navigate("/dashboard")
            }}/>
            </div>
            
            <BottomWarning label='Dont have an account ?' buttonText='Sign up' to={"/signup"}/>
            </div>
        </div>
    </div>
  )
}

