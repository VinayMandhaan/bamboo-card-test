import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions/todo';
import Card from '../components/card';
import { Modal, DeleteModal, UpdateModal, AddModal } from '../components/modal';
import { FaPlus, FaTruckLoading } from 'react-icons/fa';
import { setAddItem } from '../redux/reducers/todoSlice';
import Loader from '../components/loader';

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.todo.data)
    const loading = useSelector((state) => state.todo.isLoading)
    const page = useSelector((state) => state.todo.page)
    const perPage = useSelector((state) => state.todo.perPage)
    const total = useSelector((state) => state.todo.total)
    const [selectedItem, setSelectedItem] = useState()
    const [selectedType, setSelectedType] = useState()
    const [displayModal, setDisplayModal] = useState(false)
    const [todo, setTodo] = useState('')
    const totalPages = Math.ceil(total / perPage);


    useEffect(() => {
        const payload = {
            page: 1,
            perPage: 10
        }
        dispatch(getData(payload));
    }, [])

    const renderItem = () => {
        switch (selectedType) {
            case 'Add':
                return <AddModal setDisplayModal={setDisplayModal} setTodo={setTodo} data={data} todo={todo} />
            case 'Delete':
                return <DeleteModal setDisplayModal={setDisplayModal} selectedItem={selectedItem} />
            case 'Complete':
                return <UpdateModal setDisplayModal={setDisplayModal} selectedItem={selectedItem} />
            case 'Update':
                return <UpdateModal setDisplayModal={setDisplayModal} selectedItem={selectedItem} />
            default:
                break
        }
    }

    const handleNext = () => {
        if (page < totalPages) {
            const payload = {
                page: page + 1,
                perPage: 10
            }
            dispatch(getData(payload));
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            const prevPage = page - 1;
            dispatch(getData({ page: prevPage, perPage }));
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    };

    if (loading) {
        return (
            <div className='flex items-center justify-center mt-10'>
                <Loader/>
            </div>
        )
    }

    return (
        <>
            <div className='flex w-full items-end justify-end mt-4'>
                <div onClick={() => {
                    setSelectedType('Add')
                    setDisplayModal(true)
                }} className='flex items-center justify-center w-6 h-6 border border-gray-200 rounded-full mr-10 cursor-pointer'>
                    <FaPlus />
                </div>
            </div>
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
            <div className='flex items-center justify-center lg:items-end lg:justify-end mb-10 lg:mr-10'>
                <button onClick={() => {
                    handlePrevious()
                }} className='mr-4 border border-gray-200 rounded-lg p-2 shadow-lg'>Previous</button>
                <button onClick={() => {
                    handleNext()
                }} className='border border-gray-200 rounded-lg p-2 shadow-lg'>Next</button>
            </div>
            <Modal isOpen={displayModal}>
                {renderItem()}
            </Modal>
        </>

    );
};

export default Home;
