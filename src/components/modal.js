import React from 'react';
import { useDispatch } from "react-redux"
import { setAddItem, setDeleteItem, setUpdatedItem } from "../redux/reducers/todoSlice"
import Button from './button';


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
                <Button onClick={() => {
                    setDisplayModal(false)
                }} title={'Cancel'} backgroundColor={'bg-gray-700'} />
                <Button onClick={() => {
                    dispatch(setDeleteItem(selectedItem))
                    setDisplayModal(false)
                }} title={'Yes'} backgroundColor={'bg-red-700'} />

            </div>
        </div>
    )
}


export const UpdateModal = ({ setDisplayModal, selectedItem }) => {
    const dispatch = useDispatch()

    const handleUpdate = () => {
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
    }


    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <span>{selectedItem?.completed ? 'Mark as incomplete' : 'Mark as complete'}</span>
            <div className='w-full flex items-center justify-center mt-4 gap-4'>
                <Button onClick={() => {
                    setDisplayModal(false)
                }} title={'Cancel'} backgroundColor={'bg-gray-700'} />
                <Button onClick={() => {
                    handleUpdate()
                }} title={'Yes'} backgroundColor={'bg-green-700'} />
            </div>
        </div>
    )
}


export const AddModal = ({ setDisplayModal, setTodo, data, todo }) => {
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <span>Add Task</span>
            <div className='w-full flex items-center justify-center mt-4'>
                <input placeholder='Enter Task' onChange={(e) => {
                    setTodo(e.target.value)
                }} className='border border-gray-200 shadow-lg rounded-lg h-[48px] w-[80%] pl-4 pr-4 focus:outline-none focus:ring-0' type='text' />
            </div>
            <div className='w-full flex items-center justify-center mt-4 gap-4'>
                <Button onClick={() => {
                    setDisplayModal(false)
                }} title={'Cancel'} backgroundColor={'bg-gray-700'} />
                <Button onClick={() => {
                    const payload = {
                        user: 36,
                        id: data[data?.length - 1]?.id + 1,
                        todo: todo,
                        completed: false
                    }
                    dispatch(setAddItem(payload))
                    setDisplayModal(false)
                }} title={'Add'} backgroundColor={'bg-green-700'} />
            </div>
        </div>
    )
}
