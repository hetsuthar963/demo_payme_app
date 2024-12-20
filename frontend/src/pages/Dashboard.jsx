import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import { Users } from '../components/Users'

export default function Dashboard() {
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col gap-3'>
        <Appbar />
        <div className='flex flex-col gap-3 justify-start'>
            <Balance value={"10,000"}/>
            <Users />
        </div> 
    </div>
  )
}

