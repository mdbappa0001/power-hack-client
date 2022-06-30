import React from 'react';
import BillingModal from './BillingModal';

const AddBillingHeader = ({ add, setAdd, handelSubmit }) => {
    return (
        <section className='px-20 mt-10'>
            <div className='flex justify-between items-center bg-gray-300 px-10 py-2'>
                <div>Billing:
                    <form className='inline pl-5'> <input type="text" name='searched' className='border border-gray-500 bg-transparent focus:outline-0 placeholder:text-black px-2' placeholder='Search...' /></form>
                </div>
                <div>
                    {/* <label class="btn modal-button">open modal</label> */}
                    <label for="add-modal" className='text-white bg-green-900 px-2 py-1' onClick={() => setAdd(!add)}>Add New Bill</label>
                </div>
            </div>
            {
                add && <BillingModal add={add} setAdd={setAdd} handelSubmit={handelSubmit} />
            }
        </section>
    );
};

export default AddBillingHeader;