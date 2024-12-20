import React from 'react'

export default function SubHeading({ label }) {
  return (
    <div className='mt-4 mb-7 flex text-center justify-center'>
      <p className="flex justify-center text-center text-gray-600">
        { label }{' '}
      </p>
    </div>
  )
}

