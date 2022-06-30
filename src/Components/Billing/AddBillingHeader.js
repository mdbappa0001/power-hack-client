import React from 'react';
import BillingModal from './BillingModal';

const AddBillingHeader = ({ add, setAdd, handelSubmit }) => {
    const _id = 1;
    return (
        <section className='px-20 mt-10'>
            <div className='flex justify-between items-center rounded bg-gray-400 px-10 py-2'>
                <div><span className='font-bold'>Billing :</span>
                    <form className='inline pl-5'> <input type="text" name='searched' className='border border-gray-500 bg-transparent focus:outline-0 placeholder:text-gray-900 px-2 rounded' placeholder='Search here' /></form>
                </div>
                <div>
                    {/* <label class="btn modal-button">open modal</label> */}
                    <label for="add-modal" className='text-white bg-black rounded py-2 px-2 py-1' onClick={() => setAdd(!add)}>Add New Bill</label>
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