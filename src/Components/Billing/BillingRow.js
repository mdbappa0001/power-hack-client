import React, { useState } from 'react';
import BillingModal from './BillingModal';
import DeleteBillModal from './DeleteBillModal';

const BillingRow = ({ add, setAdd, billing }) => {
    const [confirmDelete, setConfirmDelete] = useState(false)
    const { email, amount, phone, fullName, _id } = billing;

    return (<>
        <tr class="border-b odd:bg-white even:bg-gray-50 font-medium text-gray-600">
            <td class="px-6 py-4 ">
                {_id ? _id : "Generating Id..."}
            </td>
            <td class="px-6 py-4">
                {fullName}
            </td>
            <td class="px-6 py-4">
                {email}
            </td>
            <td class="px-6 py-4">
                {phone}
            </td>
            <td class="px-6 py-4">
                {amount}
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
            confirmDelete && <DeleteBillModal setConfirmDelete={setConfirmDelete} id={_id} confirmDelete={confirmDelete} />
        }

    </>

    );
};

export default BillingRow;