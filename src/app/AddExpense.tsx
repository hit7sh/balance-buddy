"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Multiselect from 'multiselect-react-dropdown'
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
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import AddExpenseModal from './add-expense/AddExpenseModal';
import SimpleCalculator from './SimpleCalculator';

const AddExpense = ({user, friends, reInitiateHome}:any) => {
  const [addExpenseLoading, setAddExpenseLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [friendEmail, setFriendEmail] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("0");
  const [selectedFriends, setSelectedFriends] = useState<any>([]);
  const [selectedType, setSelectedType] = useState("");

  const items = friends?.map?.((friend:any) => ({name: friend?.name, id: friend?.name}));
  /* function */ const addExpense = ({
    user,
  }:any) => {
    (async () => {
      setAddExpenseLoading(true);
      const res = await axios.post(`${BACKEND_BASE_URL}/person/add-expense`, {
        paidBy: user?.email,
        description,
        totalAmt: amount,
        splitType:"EQUAL",
        contributors: [
            {
            email : friendEmail,
            }
        ]
      });
      setApiResponse(res?.data);
      setAddExpenseLoading(false);
      })();
  };
  console.log({friends});
  
  
  return (
    <div className="col-span-3 bg-yellow-200 overflow-scroll">
                <center>
                <Dialog>
                <DialogTrigger asChild>
                  <Button className="m-5 shadow-lg">+ Add Expense</Button>
                                </DialogTrigger>
                <AddExpenseModal
                  user={user}
                  friends={friends}
                  reInitiateHome={reInitiateHome}
                />  
              </Dialog>
                </center>
          <SimpleCalculator></SimpleCalculator>
            </div>
  )
}

export default AddExpense