import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react'
import Search from './Search';

const Header = ({
    setUser,
    setIsAuthenticated,
    children,
    allUsers,
    loggedInEmail,
}:any) => {

    const {
        user,
        loginWithRedirect,
        isAuthenticated,
        logout,
        isLoading,
    } = useAuth0();

    useEffect(() => {
        setIsAuthenticated(isAuthenticated);
        setUser(user);
    }, [isAuthenticated]);
    const [value, setValue] = useState("");

    return (
        <header className=" bg-slate-400 lg:pb-0">
            <div className="">
                <nav className="flex items-center justify-between">
            <span>{children}</span>
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex text-black font-semibold">
                            Balance Buddy
                        </a>
                    </div>
                    <Search
                        items={allUsers}
                        label="name"
                        id="id"
                        selectedVal={value}
                        loggedInEmail={loggedInEmail}
                        onSearch={(val:any) => setValue(val)}
                    />
                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                        <div>
                    {
              isAuthenticated ? (
                <div className="pr-2">{user?.given_name || user?.name || user?.email}
                  <img className="ml-1 inline-flex bottom-5 right-5 w-6 h-6 rounded-full object-cover"
                    src={user?.picture}  />
                  <Button className="m-1 ml-2 mr-1" onClick={() => logout()} variant="secondary">
                    Log Out
                  </Button>
                </div>
              ) : (
                    <Button
                        className="mb-2 mt-2 mr-5"
                        onClick={() => loginWithRedirect({
                            authorizationParams: {
                            connection: 'google-oauth2'
                            }
                        })}
                    >Log In </Button>
                    )
                }
                        </div>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Header