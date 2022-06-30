import React from 'react';

const DeleteBillModal = ({ confirmDelete, setConfirmDelete, id }) => {
    const handelDelete = (id) => {
        fetch(`http://localhost:5000/delete-billing/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    console.log(data)
                }
            })
        setConfirmDelete(!confirmDelete)
    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box rounded-none">
                    <h1 className='text-center text-error font-semibold text-2xl'> Warning!!!</h1>
                    <p className='font-semibold my-10'>Are you sure want to delete <span className='font-black text-error'> {id}</span> billing Info?</p>
                    <div className='flex justify-between'>
                        <button className='btn btn-error btn-sm text-white' onClick={() => handelDelete(id)}>Delete</button>
                        <button className='btn btn-sm' onClick={() => setConfirmDelete(!confirmDelete)}>Close</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeleteBillModal;