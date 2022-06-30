import React, { useState } from 'react';
import BillingModal from './BillingModal';
import DeleteBillModal from './DeleteBillModal';

const BillingRow = ({ add, setAdd }) => {
    const [confirmDelete, setConfirmDelete] = useState(false)
    return (<>
        <tr class="border-b odd:bg-white even:bg-gray-50 font-medium text-gray-600">
            <td class="px-6 py-4 ">
                1536217262792732
            </td>
            <td class="px-6 py-4">
               Sayem Rahman
            </td>
            <td class="px-6 py-4">
                sayem@gmail.com
            </td>
            <td class="px-6 py-4">
                01521536417
            </td>
            <td class="px-6 py-4">
                500
            </td>
            <td class="px-6 py-4">
                <label for="add-modal" className='text-green-800 cursor-pointer' onClick={() => setAdd(!add)}>Edit</label>
                <span className='mx-2'>|</span>
                <label for="delete-modal" className='text-red-900 cursor-pointer' onClick={() => setConfirmDelete(!confirmDelete)}>Delete</label>
            </td>
        </tr>
        {
            add && <BillingModal />
        }
        {
            confirmDelete && <DeleteBillModal setConfirmDelete={setConfirmDelete} confirmDelete={confirmDelete} />
        }
    </>

    );
};

export default BillingRow;