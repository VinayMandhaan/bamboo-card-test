import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions/todo';
import Card from '../components/card';
import { Modal, DeleteModal, UpdateModal } from '../components/modal';

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.todo.data)
    const loading = useSelector((state) => state.todo.loading)
    const page = useSelector((state) => state.todo.page)
    const perPage = useSelector((state) => state.todo.perPage)
    const total = useSelector((state) => state.todo.total)
    const [selectedItem, setSelectedItem] = useState()
    const [selectedType, setSelectedType] = useState()
    const [displayModal, setDisplayModal] = useState(false)
    const totalPages = Math.ceil(total / perPage);


    useEffect(() => {
        const payload = {
            page:1,
            perPage:10
        }
        dispatch(getData(payload));
    }, [])

    const renderItem = () => {
        switch (selectedType) {
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
                page:page + 1,
                perPage:10
            }
            dispatch(getData(payload));
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            const prevPage = page - 1;
            dispatch(getData({ page: prevPage, perPage }));
        }
    };

    if (loading) {
        <span>Loading</span>
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
            <div className='flex items-end justify-end mr-10'>
                <button onClick={() => {
                    handlePrevious()
                }} className='mr-4'>Previous</button>
                <button onClick={() => {
                    handleNext()
                }}>Next</button>
            </div>
            <Modal isOpen={displayModal}>
                {renderItem()}
            </Modal>
        </>

    );
};

export default Home;
