import React, { useState } from 'react'
import InputBox from '../components/InputBox'
import Heading from '../components/Heading'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import SubHeading from '../components/SubHeading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  return (
    <div className='bg-gray-100 h-screen flex justify-center'>
        <div className='flex flex-col justify-center '>
            <div className='rounded-lg bg-white w-96 text-center p-2 h-max px-4' >
            <Heading label={"Sign up"} />
            <SubHeading label={"Create your account to get started."} />

            <InputBox onChange={e => {
                setFirstName(e.target.value);
            }} label={"First Name"} placeholder="John" />

            <InputBox  onChange={e => {
                setLastName(e.target.value);
            }} label={"Last Name"} placeholder="Doe" />

            <InputBox onChange={e => {
                setUserName(e.target.value);
            }} label={"Email"} placeholder=" johndoe@xyz.com" />

            <InputBox onChange={e => {
                setPassword(e.target.value);
            }} label={"Password"} placeholder="123456" />

            <div className='pt-4'>
            <Button onClick={async() => {
                const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                    username,
                    firstName,
                    lastName,
                    password
                });
                localStorage.setItem("token", response.data.token)
                localStorage.removeItem("token")
                navigate("/dashboard")
            }} label={"Sign Up"} />
            </div>
            <BottomWarning label={'Already have an account ?'} buttonText={'Signin'} to={"/signin"} />
            </div>
        </div>
    </div>
  )
}

