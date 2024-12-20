import React from 'react'
import Heading from './Heading'

export default function Appbar() {
  return (
    <div className=''>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-white border-b-2 border-gray-200">
        <div className="relative flex h-16 items-center justify-between">

        <div > 
          <Heading label={"Payment App"}/>
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

