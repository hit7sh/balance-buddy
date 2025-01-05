import React from 'react'

const ReviewExpense = ({
    description,
    selectedType,
    contributions,
    totalAmount,
} : any) => {
  return (
    <>
    <div className="text-sm font-medium text-gray-800 mb-2">Description: {description}</div>
    <div className="text-sm font-medium text-gray-800 mb-2">SplitType: {selectedType}</div>
    <div className="flex flex-col space-y-2 bg-green-300 border-2 border-green-500 rounded-lg p-2">
        --Contributions--
      {contributions.map((contributor:any, index:number) => (
        <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
          <p className="text-sm font-medium text-gray-800">{contributor.name}</p>
          <p className="text-sm font-medium text-gray-800">{selectedType === 'EQUAL' ? totalAmount/contributions.length : contributor.amount}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default ReviewExpense