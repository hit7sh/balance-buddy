import { Button } from '@/components/ui/button'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import ClipLoader from "react-spinners/ClipLoader";
import React, { useState } from 'react'
import SelectParticipants from './SelectParticipants'
import SplitDetails from './SplitDetails'
import ReviewExpense from './ReviewExpense'
import { BACKEND_BASE_URL } from '../constants'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const AddExpenseModal = ({user, friends, reInitiateHome}:any) => {
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

  const validateScreen = (screenNumber: number): boolean => {
    switch(screenNumber) {
      case 0:
        if (!selectedFriends?.length) toast("⚠️Please select at least one friend");
        return selectedFriends?.length > 0;
      case 1:
        if (selectedType === 'MANUAL') {
          let sum = 0;
          contributions.forEach((contribution: any) => sum += Number(contribution?.amount));
          if (sum != totalAmount) {
            toast("⚠️Total Sum of splits must be equal to Total Amount");
            return false;
          }
        }
        if (!description) {
          toast("⚠️Please enter a description");
        } else if (!selectedType) {
          toast("⚠️Please select a split type");
        } else if (totalAmount <= 0) {
          toast("⚠️Total Amount must be positive");
        } else if (!['MANUAL', 'EQUAL'].includes(selectedType)) {
          toast("⚠️Please select Type of split");
          return false;
        }
        return description && selectedType && totalAmount > 0;
    }
    return true;
  };
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
      setAddExpenseApiResponse(res?.data);
      
      setAddExpenseLoading(false);
      if ( res?.data === 'SUCCESS') {
        reInitiateHome();
      }
      })();
  };

  return (
    <DialogContent onCloseAutoFocus={resetStates} className="h-5/6 w-5/6">
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogDescription>
            {`Step ${currentStep + 1} • ${steps[currentStep]} `}
          </DialogDescription>
          <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
                totalAmount={totalAmount}
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
        {!!addExpenseApiResponse ? (addExpenseApiResponse === 'SUCCESS' ? 'Expense added successfully ✅' : '⚠️Failed to add expense') : (
        <div className="flex mt-auto">

            <Button
              type="button"
              onClick={() => setCurrentStep(currentStep-1)}
              disabled={currentStep === 0}
              variant="secondary"
            >
              Previous
            </Button>

            <Button type="button" onClick={() => {
              if (currentStep < 2) {
                if (!validateScreen(currentStep)) {
                  return;
                }
                setCurrentStep(currentStep + 1);
              } else {
                addExpense();
              }
            }} className="ml-auto">
              {currentStep < 2 ? 'Next' : 'Submit'}
              {addExpenseLoading && <ClipLoader color="#ffffff" loading={true} />}
            </Button>
        </div>)}
      </DialogContent>
  )
}

export default AddExpenseModal