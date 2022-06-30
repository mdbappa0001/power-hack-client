import React from 'react';

const DeleteBillModal = ({ confirmDelete, setConfirmDelete }) => {
    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box rounded-none">
                    <h1 className='text-center text-error font-semibold text-2xl'> Warning!!!</h1>
                    <button onClick={() => setConfirmDelete(!confirmDelete)}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteBillModal;