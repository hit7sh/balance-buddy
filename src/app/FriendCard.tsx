import { Button } from '@/components/ui/button'
import React from 'react'

const FriendCard = () => {
  return (
              <div className=" bg-slate-50 shadow rounded-lg p-4 m-4 flex justify-between">

    <div>
                <h3 className="text-lg font-semibold text-gray-800">hitesh</h3>
                <h5 className="text-lg font-semibold text-gray-800 text-center">hit7sh@gmail.com</h5>

                </div>
    <div className="flex-row-reverse">
        <div className="bg-red-200 rounded-lg p-1 pl-4 pr-4 text-2xl font-bold text-gray-900 text-center mr-1">₹1,234 <div><Button className="align-middle">Settle</Button></div></div>
        
    </div></ div>
  )
}

export default FriendCard