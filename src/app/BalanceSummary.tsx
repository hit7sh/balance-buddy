import React from 'react'

const BalanceSummary = () => {
  return (
    <div className="col-span-2">
              <div className=" bg-slate-50 shadow rounded-lg p-4 m-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">Total Paid</h3>
                <hr className="my-2 border-gray-300" />
                <p className="text-xl font-bold text-gray-900 text-center">₹1,234.56</p>
              </div>
              <div className=" bg-red-50 shadow rounded-lg p-4 m-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">Borrowed</h3>
                <hr className="my-2 border-gray-300" />
                <p className="text-xl font-bold text-gray-900 text-center">₹1,234.56</p>
              </div>
              <div className="bg-green-50 shadow rounded-lg p-4 m-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">Get Back</h3>
                <hr className="my-2 border-gray-300" />
                <p className="text-xl font-bold text-gray-900 text-center">₹1,234.56</p>
              </div>
            </div>
  )
}

export default BalanceSummary