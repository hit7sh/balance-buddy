import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { BACKEND_BASE_URL } from './constants';

export default function Search({
    items,
    onSearch,
    loggedInEmail,
    friends,
    setFriends,
    reInitiateHome,
}:any) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<any>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const searchInputRef = useRef<any>(null);
    
    useEffect(() => {
        if (searchTerm) {
            const results = items.filter((item:any) =>
                item?.name?.toLowerCase?.()?.includes?.(searchTerm?.toLowerCase?.())
            );
            setSearchResults(results);
            setIsDropdownOpen(true); // Open dropdown when there are results
        } else {
            setSearchResults([]);
            setIsDropdownOpen(false); // Close dropdown when search term is empty
        }
        onSearch(searchTerm);
    }, [searchTerm, items, onSearch]);

    const handleInputChange = (event:any) => {
        setSearchTerm(event.target.value);
    };

    const handleClear = () => {
        setSearchTerm('');
        searchInputRef?.current?.focus?.();
    };

    const handleResultClick = (result:any) => {
        setSearchTerm(result);
        setSearchResults([]); // Close dropdown
        setIsDropdownOpen(false);
    };

    const handleBlur = (event:any) => {
        // Check if the blur target is outside the search component
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsDropdownOpen(false);
        }
    };

    return (
        <div className="ml-5 relative w-1/2" onBlur={handleBlur}> {/* Added onBlur handler */}
            <div className="flex items-center">
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onFocus={() => searchResults.length > 0 && setIsDropdownOpen(true)} // Open on focus if results are available
                />
                {searchTerm && (
                    <button
                        className="px-2 py-2 bg-gray-200 rounded-r-md hover:bg-gray-300 border border-gray-300 border-l-0"
                        onClick={handleClear}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
            </div>

            {isDropdownOpen && ( // Conditionally render dropdown
                <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10 max-h-48 overflow-y-auto"> {/* Added max-height and overflow */}
                    {searchResults.map((result:any) => (
                        <li
                            key={result?.email}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            // onClick={() => handleResultClick(result)}
                        >
                            <div className="flex justify-between">
                                {result?.name}
                                <Button
                                    disabled={!!friends.find((friend:any) => friend.email === result?.email)}
                                    onClick={async () => {
                                        await axios.post(`${BACKEND_BASE_URL}/person/add-friend/${loggedInEmail}/${result?.email}`);
                                        reInitiateHome();
                                        setFriends([...friends, {email: result?.email, name: result?.name} ]);
                                    }}
                                >Add Friend</Button>
                            </div>
                        </li>
                    ))}
                    {searchResults.length === 0 && searchTerm && ( // Display "No results" message
                        <li className="px-3 py-2 text-gray-500">No results found</li>
                    )}
                </ul>
            )}
        </div>
    );
}
