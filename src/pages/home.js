import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions/todo';
import Card from '../components/card';
import Modal from '../components/modal';
import { setDeleteItem } from '../redux/reducers/todoSlice';

const Home = () => {
    const dispatch = useDispatch()
    const [selectedItem, setSelectedItem] = useState()
    const [selectedType, setSelectedType] = useState()
    const [displayModal, setDisplayModal] = useState(false)
    const data = useSelector((state) => state.todo.data)
    const loading = useSelector((state) => state.todo.loading)

    useEffect(() => {
        dispatch(getData())
    }, [])

    const renderItem = () => {
        switch (selectedType) {
            case 'Delete':
                return renderDeleteModal()
            case 'Complete':
                return renderUpdateModal()
            default:
                break
        }
    }

    if (loading) {
        <span>Loading</span>
    }

    const renderDeleteModal = () => {
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

    const renderUpdateModal = () => {
        return (
            <div className='flex flex-col items-center justify-center p-4'>
                <span>Mark as complete?</span>
                <div className='w-full flex items-center justify-center mt-4 gap-4'>
                    <button onClick={() => {
                        setDisplayModal(false)
                    }} className='bg-gray-700 w-[20%] rounded-lg shadow-md text-white text-16 pt-[4px] pb-[4px]'>Cancel</button>
                    <button className='bg-green-700 w-[20%] rounded-lg shadow-md text-white text-16 pt-[4px] pb-[4px]'>Yes</button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='flex flex-wrap justify-center gap-4 mt-10 mb-10'>
                {
                    data && data?.map((val, ind) => (
                        <Card val={val} ind={ind}
                            setSelectedType={(type, val) => {
                                setSelectedType(type)
                                setDisplayModal(true)
                                setSelectedItem(val)
                            }} />
                    ))
                }
            </div>
            <Modal isOpen={displayModal}>
                {renderItem()}
            </Modal>
        </>

    );
};

export default Home;
