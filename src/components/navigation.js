import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='bg-gray-800 p-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <span className='text-white ml-2 text-lg font-bold'>TODO</span>
                </div>

                <div className='md:hidden'>
                    <button className='text-white' onClick={toggleMenu}>
                        <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                        </svg>
                    </button>
                </div>

                <div className='hidden lg:flex'>
                    <a href='/' className='text-white hover:bg-gray-700 px-3 py-2 rounded-md'>Home</a>
                    <a href='/' className='text-white hover:bg-gray-700 px-3 py-2 rounded-md'>About</a>
                    <a href='/' className='text-white hover:bg-gray-700 px-3 py-2 rounded-md'>Services</a>
                    <a href='/' className='text-white hover:bg-gray-700 px-3 py-2 rounded-md'>Contact</a>
                </div>

            </div>
            {
                isOpen && (
                    <div style={{
                        maxHeight: isOpen ? '100vh' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.8s ease-in-out'
                    }}  className='flex flex-col mt-4'>
                        <a href='/' className='text-white hover:bg-gray-700 px-3 py-2 rounded-md'>Home</a>
                        <a href='/' className='text-white hover:bg-gray-700 px-3 py-2 rounded-md'>About</a>
                        <a href='/' className='text-white hover:bg-gray-700 px-3 py-2 rounded-md'>Services</a>
                        <a href='/' className='text-white hover:bg-gray-700 px-3 py-2 rounded-md'>Contact</a>
                    </div>
                )
            }
        </header>
    );
};

export default Header;
