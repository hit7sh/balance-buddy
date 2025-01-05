import { Button } from '@/components/ui/button'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import React, { useState } from 'react'
import SelectParticipants from './SelectParticipants'
import SplitDetails from './SplitDetails'
import ReviewExpense from './ReviewExpense'
import { BACKEND_BASE_URL } from '../constants'
import axios from 'axios'

const AddExpenseModal = ({user, friends,}:any) => {
  const items = friends?.map?.((friend:any) => ({name: friend?.name, email: friend?.email, id: friend?.name}));
  const steps = ['Add Participants', 'Add Split Details', 'Review and Submit'];
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFriends, setSelectedFriends] = useState<any>([]);
  const [description, setDescription] = useState<any>('');
  const [selectedType, setSelectedType] = useState('');
  const [contributions, setContributions] = useState<any>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [addExpenseLoading, setAddExpenseLoading] = useState(false);
  const [addExpenseApiResponse, setAddExpenseApiResponse] = useState<any>(null);

  const resetStates = () => {
    setSelectedFriends([]);
    setDescription('');
    setSelectedType('');
    setContributions([]);
    setTotalAmount(0);
    setAddExpenseApiResponse(null);
    setCurrentStep(0);
  };
  const addExpense = () => {
    (async () => {
      setAddExpenseLoading(true);
      const res = await axios.post(`${BACKEND_BASE_URL}/person/add-expense`, {
        paidBy: user?.email,
        description,
        totalAmt: totalAmount,
        splitType: selectedType,
        contributors: contributions?.filter((contributor: any) => contributor?.email !== user?.email),
      });
      addExpenseApiResponse(res?.data);
      setAddExpenseLoading(false);
      })();
  };

  return (
    <DialogContent onCloseAutoFocus={resetStates} className="h-5/6 w-5/6">
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogDescription>
            {`Step ${currentStep + 1} • ${steps[currentStep]} `}
          </DialogDescription>
        </DialogHeader>
        <div className="">
          {
            currentStep === 0 && (
              <SelectParticipants
                items={items}
                selectedFriends={selectedFriends}
                setSelectedFriends={setSelectedFriends}
              />
            )
          }
          {
            currentStep === 1 && (
              <SplitDetails
                user={user}
                selectedFriends={selectedFriends}
                description={description}
                setDescription={setDescription}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                contributions={contributions}
                setContributions={setContributions}
                setTotalAmount={setTotalAmount}
              />
            )
          }
          {
            currentStep === 2 && (
              <ReviewExpense
                description={description}
                selectedType={selectedType}
                contributions={contributions}
                totalAmount={totalAmount}
              />
            )
          }
        </div>
        <div className="flex mt-auto">

            <Button
              type="button"
              onClick={() => setCurrentStep(currentStep-1)}
              disabled={currentStep === 0}
              variant="secondary"
            >
              Previous
            </Button>

            <Button type="button" disabled={currentStep === 0 && !selectedFriends?.length} onClick={() => {
              if (currentStep < 2) {
                setCurrentStep(currentStep + 1);
              } else {
                addExpense();
              }
            }} className="ml-auto">
              {currentStep < 2 ? 'Next' : 'Submit'}
            </Button>
        </div>
      </DialogContent>
  )
}

export default AddExpenseModal