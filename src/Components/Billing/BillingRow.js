import React, { useState } from 'react';
import BillingModal from './BillingModal';
import DeleteBillModal from './DeleteBillModal';

const BillingRow = ({ billing, refetch, setRefetch }) => {
    const [confirmDelete, setConfirmDelete] = useState(false)
    const { email, amount, phone, fullName, _id } = billing;
    const [update, setUpdate] = useState(false)

    return (<>
        <tr className="border-b odd:bg-gray-100 even:bg-gray-200 font-medium text-gray-600">
            <td className="px-6 py-4 ">
                {_id ? _id : "Generating New Id..."}
            </td>
            <td className="px-6 py-4">
                {fullName}
            </td>
            <td className="px-6 py-4">
                {email}
            </td>
            <td className="px-6 py-4">
                {phone}
            </td>
            <td className="px-6 py-4">
                {amount}
            </td>
            <td className="px-6 py-4">
                <label for="add-modal" className='text-green-800 cursor-pointer' onClick={() => setUpdate(!update)}>Edit</label>
                <span className='mx-2'>|</span>
                <label for="delete-modal" className='text-red-900 cursor-pointer' onClick={() => setConfirmDelete(!confirmDelete)}>Delete</label>
            </td>
        </tr>
        {
            update && <BillingModal setUpdate={setUpdate} update={update} id={_id} setRefetch={setRefetch}
                refetch={refetch} />
        }
        {
            confirmDelete && <DeleteBillModal setConfirmDelete={setConfirmDelete} id={_id} confirmDelete={confirmDelete} setRefetch={setRefetch}
                refetch={refetch} />
        }

    </>

    );
};

export default BillingRow;