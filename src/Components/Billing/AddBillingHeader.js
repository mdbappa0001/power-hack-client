import React from 'react';
import BillingModal from './BillingModal';

const AddBillingHeader = ({ add, setAdd }) => {
    return (
        <section className='px-20 mt-10'>
            <div className='flex justify-between items-center bg-gray-300 px-10 py-2'>
                <div>Billing:
                    <form className='inline pl-5'> <input type="text" name='searched' className='border border-gray-500 bg-transparent focus:outline-0 placeholder:text-black px-2 rounded' placeholder='Search...' /></form>
                </div>
                <div>
                    {/* <label class="btn modal-button">open modal</label> */}
                    <label for="add-modal" className='text-white bg-black px-2 py-1 rounded' onClick={() => setAdd(!add)}>Add New Bill</label>
                </div>
            </div>
            {
                add && <BillingModal add={add} setAdd={setAdd} />
            }
        </section>
    );
};

export default AddBillingHeader;