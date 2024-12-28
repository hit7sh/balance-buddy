"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axios from "axios";

import React, { useState } from 'react'
import { BACKEND_BASE_URL } from './constants'

const AddExpense = () => {
  const [addExpenseLoading, setAddExpenseLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const addExpense = () => {
    (async () => {
      setAddExpenseLoading(true);
      const res = await axios.get(`${BACKEND_BASE_URL}/add-expense`);
      setApiResponse(res?.data);
      setAddExpenseLoading(false);
    })();
  };
  return (
    <div className="col-span-3 bg-yellow-200">
                <h3 className="pt-5 text-lg font-semibold text-gray-800 text-center">Select Friends</h3>
                <center>
                  <Input className="bg-white m-2 w-5/6"></Input>
                </center>
                <h3 className="text-lg font-semibold text-gray-800 text-center">Description</h3>
                <center>
                  <Input className="bg-white m-2 w-5/6"></Input>
                </center>

                <center>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="bg-white p-1 mt-2 mb-2 rounded-lg">Select Split Type 👇</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Select ⬇️</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Equal</DropdownMenuItem>
                        <DropdownMenuItem>Manual</DropdownMenuItem>
                        <DropdownMenuItem>Percentage</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </center>
                <h3 className="text-lg font-semibold text-gray-800 text-center">Description</h3>
                <center>
                                <Input className="bg-white m-2 w-5/6"></Input>
                </center>

                <h3 className="text-lg font-semibold text-gray-800 text-center">Amount</h3>
                <center>
                                <Input className="bg-white m-2 w-5/6"></Input>
                </center>

                <center>

                <Button className="mt-2" onClick={addExpense}>+ Add Expense</Button>
                </center>
            </div>
  )
}

export default AddExpense