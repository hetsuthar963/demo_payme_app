import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomWarning({ label, buttonText, to }) {
  return (
    <div className='py-2 text-sm flex justify-center'>
      <div>
        {label}
      </div>
      <Link className="underline text-black hover:text-gray-600 font-bold text-under cursor-pointer pl-1" to={to}>
        { buttonText }
      </Link>
    </div>
  )
}

