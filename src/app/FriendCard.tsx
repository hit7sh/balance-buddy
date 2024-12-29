import { Button } from '@/components/ui/button'
import React from 'react'

const FriendCard = ({email, delta}: any) => {
  return (
              <div className=" bg-slate-50 shadow rounded-lg p-4 m-4 flex justify-between">

    <div className="flex">
        <div className="flex">
                <div className="bg-green-50 shadow rounded-lg p-4 mr-3">
                <h3 className="text-lg font-semibold text-gray-800 text-center">{email?.[0]?.toUpperCase()}</h3>
                <hr className="my-2 border-gray-300" />
              </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">{email?.split?.('@')?.[0]}</h3>
                <h5 className="text-lg font-semibold text-gray-800 text-center">{email}</h5>
            </div>

                </div>
            {
              delta > 0 ? (
                <div className="flex-row-reverse">
                  <div className="bg-red-200 rounded-lg p-1 pl-4 pr-4 text-lg font-bold text-gray-900 text-center mr-1">₹{delta} <div>
                  <Button className="align-middle">Settle</Button>
                  </div>
                </div>
              </div>
              ) : (
                <div className="flex-row-reverse">
                  <div className="bg-green-200 rounded-lg p-1 pl-4 pr-4 text-lg font-bold text-gray-900 text-center mr-1">₹{-delta} <div>
                  <Button className="align-middle">Settle</Button>
                  </div>
                </div>
              </div>
              )
            }
    </ div>
  )
}

export default FriendCard