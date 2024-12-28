import React from 'react'
import FriendCard from './FriendCard'

const OutstandingBalanceList = ({apiLoading, balanceList}: any) => {
  if (!balanceList) {
    return "Loading";
  }
  return (
    <div className="col-span-7 bg-green-200 overflow-scroll">
                <h1 className="text-center font-bold text-2xl mt-2 underline">Friends balance</h1>
               {balanceList?.map?.((friend:any, index:any) => <FriendCard key={index} email={friend?.friendEmail} delta={friend?.delta} />)}
                
            </div>
  )
}

export default OutstandingBalanceList