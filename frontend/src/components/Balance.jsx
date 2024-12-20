import React from 'react'

export default function Balance({ value }) {
  return (
    <div>
      <div className='text-left mt-4 flex justify-items-start gap-3'>
        
        <div className="text-xl font-bold tracking-tight">Your Balance</div>
        <div className="text-xl font-bold tracking-tight"> { value } </div>
      </div>
    </div>
  )
}

