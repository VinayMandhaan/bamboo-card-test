import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { setDeleteItem, setUpdatedItem } from "../redux/reducers/todoSlice"


export const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 w-full">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};


export const DeleteModal = ({ setDisplayModal, selectedItem }) => {
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <span>Are you sure you want to delete this item?</span>
            <div className='w-full flex items-center justify-center mt-4 gap-4'>
                <button onClick={() => {
                    setDisplayModal(false)
                }} className='bg-gray-700 w-[20%] rounded-lg shadow-md text-white text-16 pt-[4px] pb-[4px]'>Cancel</button>
                <button onClick={() => {
                    dispatch(setDeleteItem(selectedItem))
                    setDisplayModal(false)
                }} className='bg-red-700 w-[20%] rounded-lg shadow-md text-white text-16 pt-[4px] pb-[4px]'>Yes</button>
            </div>
        </div>
    )
}


export const UpdateModal = ({ setDisplayModal, selectedItem }) => {
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <span>{selectedItem?.completed ? 'Mark as incomplete' : 'Mark as complete'}</span>
            <div className='w-full flex items-center justify-center mt-4 gap-4'>
                <button onClick={() => {
                    setDisplayModal(false)
                }} className='bg-gray-700 w-[20%] rounded-lg shadow-md text-white text-16 pt-[4px] pb-[4px]'>Cancel</button>
                <button onClick={() => {
                    if (selectedItem?.completed) {
                        const payload = {
                            id: selectedItem?.id,
                            type: false
                        }
                        dispatch(setUpdatedItem(payload))
                        setDisplayModal(false)
                    } else {
                        const payload = {
                            id: selectedItem?.id,
                            type: true
                        }
                        dispatch(setUpdatedItem(payload))
                        setDisplayModal(false)
                    }
                }} className='bg-green-700 w-[20%] rounded-lg shadow-md text-white text-16 pt-[4px] pb-[4px]'>Yes</button>
            </div>
        </div>
    )
}
