import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/actions/todo';
import Card from '../components/card';

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.todo.data)
    const loading = useSelector((state) => state.todo.loading)

    useEffect(() => {
        dispatch(getData())
    }, [])


    if(loading) {
        <span>Loading</span>
    }
    return (
        <div className='flex flex-wrap justify-center gap-4 mt-10 mb-10'>
            {
                data && data?.map((val, ind) => (
                    <Card val={val} ind={ind} />
                ))
            }
        </div>
    );
};

export default Home;
