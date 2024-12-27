import { Button } from '@/components/ui/button'
import React from 'react'

const Header = ({children}:any) => {
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

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                    <Button className="mb-2 mt-2 mr-5">Log In </Button>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Header