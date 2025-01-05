import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useEffect } from 'react'

const SplitDetails = ({
    user,
    selectedFriends,
    setDescription,
    selectedType,
    setSelectedType,
    setContributions,
    setTotalAmount,
}: any) => {
  
  useEffect(() => {
    const splits = [];
    splits.push({email: user?.email, name: user?.name, amount: 0 });
    selectedFriends?.forEach((friend: any) => splits.push({email: friend?.email, name: friend?.name, amount: 0}));
    setContributions(splits);
  }, []);

  const editAmount = (email: string, amount: number) => {
    setContributions((prev: any) => {
      const newContributions = prev.map((contribution: any) => {
        if (contribution.email === email) {
          return { email, name: contribution?.name, amount };
        }
        return contribution;
      });
      return newContributions;
    });
  };

  return ( 
    <div>
        <div className="text-black flex text-md">Description: <Input className="bg-white ml-2 mb-5 w-5/6" onChange={(e:any) => setDescription(e.target.value)}></Input></div>
        
        <div className="flex mb-5">Amount: <Input onChange={(e:any)=>setTotalAmount(e.target.value)} className="ml-2 bg-white mb-1" type="number" /></div>

        <Select onValueChange={(value) => setSelectedType(value)}>
          <SelectTrigger className="mb-5">
            <SelectValue placeholder="▼ Select Split Type " />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="EQUAL">EQUAL</SelectItem>
            <SelectItem value="MANUAL">MANUAL</SelectItem>
          </SelectContent>
        </Select>
        
        {
            selectedType === 'MANUAL' && (
              <div className="flex flex-col items-center bg-green-200 p-2 border-collapse border-2 border-green-500 rounded-lg content-center">
                <div className="mb-2 underline">Splits</div>
                <div className="flex">{user?.name}: <Input onChange={(e:any)=>editAmount(user?.email, e.target.value)} className="ml-2 bg-white mb-1 w-[20vh]" type="number" /></div>
                {selectedFriends.map((friend: any) => <div className="flex mb-1">{friend?.name?.split?.(' ')?.[0]}: <Input onChange={(e:any)=>editAmount(friend?.email, e.target.value)} className="ml-2 bg-white w-[20vh]" type="number" /></div>)}
              </div>
            )
        }
    </div>
  )
}

export default SplitDetails