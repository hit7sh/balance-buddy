import Multiselect from 'multiselect-react-dropdown'
import React from 'react'

const SelectParticipants = ({items, selectedFriends, setSelectedFriends} : any) => {
  return (
    <center>
                      <Multiselect
                      className="text-black bg-white w-full font-sans"
                        options={items} // Options to display in the dropdown
                        selectedValues={selectedFriends} // Preselected value to persist in dropdown
                        onSelect={(_, friend) => setSelectedFriends((oldState:any) => [...oldState, friend])} // Function will trigger on select event
                        onRemove={(_, friend) => setSelectedFriends((oldState:any) => oldState?.filter((frnd:any) => frnd?.name !== friend?.name))} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                      />
                    </center>
  )
}

export default SelectParticipants