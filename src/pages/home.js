import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions/todo';
import Card from '../components/card';
import { Modal, DeleteModal, UpdateModal } from '../components/modal';

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
                return <DeleteModal setDisplayModal={setDisplayModal} selectedItem={selectedItem} />
            case 'Complete':
                return <UpdateModal setDisplayModal={setDisplayModal} selectedItem={selectedItem} />
            case 'Update':
                return <UpdateModal setDisplayModal={setDisplayModal} selectedItem={selectedItem} />
            default:
                break
        }
    }

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
            <Modal isOpen={displayModal}>
                {renderItem()}
            </Modal>
        </>

    );
};

export default Home;
