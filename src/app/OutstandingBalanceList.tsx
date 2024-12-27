import React from 'react'
import FriendCard from './FriendCard'

const OutstandingBalanceList = () => {
  return (
    <div className="col-span-7 bg-green-200 overflow-scroll">
                <h1 className="text-center font-bold text-2xl mt-2 underline">Friends balance</h1>
               {[1, 2, 3, 4, 5, 6, 7].map((_, index) => <FriendCard key={index} />)}
                
            </div>
  )
}

export default OutstandingBalanceList