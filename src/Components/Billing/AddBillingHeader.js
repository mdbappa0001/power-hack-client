import React from 'react';
import BillingModal from './BillingModal';
import { AiOutlineReload } from 'react-icons/ai'
import { GoSignOut } from 'react-icons/go'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddBillingHeader = ({ add, setAdd, handelSubmit, setText }) => {
    const _id = 1;
    const navigate = useNavigate()
    const handelSearch = e => {
        e.preventDefault()
        const text = e.target.searched.value;
        setText(text)
    }
    const signOut = () => {
        localStorage.removeItem('accessToken');
        toast.success('Log out')
        navigate('/')
    }
    return (
        <section className='px-20 mt-10'>
        <div className='flex justify-between items-center bg-gray-400 px-10 py-2'>
            <div><span className='font-bold'>Billing :</span>
                <form onSubmit={handelSearch} className='inline pl-5'>
                    <input type="text" name='searched' className='border border-gray-500 bg-transparent rounded focus:outline-0 placeholder:text-black px-2 py-1 mr-2' placeholder='Search here ...' required />
                    <input type="submit" value="submit" className='text-white rounded bg-black px-2 py-1' />
                </form>
                <button className='ml-3 text-xl font-bold text-green-900 tooltip tooltip-success' data-tip="Reload" onClick={() => setText('')}>

                    <AiOutlineReload />
                </button>
            </div>
            <div className='flex items-center'>
                {/* <label className="btn modal-button">open modal</label> */}
                <label for="add-modal" className='text-white bg-black rounded px-2 py-1' onClick={() => setAdd(!add)}>Add New Bill</label>
                <button className='ml-5 text-2xl text-black' onClick={signOut}><GoSignOut /></button>
            </div>
        </div>
        {
            add && <BillingModal
                add={add}
                setAdd={setAdd}
                handelSubmit={handelSubmit}
                id={_id} />
        }
    </section>
    );
};

export default AddBillingHeader;