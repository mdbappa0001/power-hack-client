import React from 'react';

const BillingModal = ({ add, setAdd, handelSubmit, setUpdate, update, id, refetch, setRefetch }) => {

    const handelUpdate = (event) => {
        event.preventDefault()
        const email = event.target.floating_email.value;
        const amount = event.target.floating_amount.value;
        const phone = event.target.floating_phone.value;
        const fullName = event.target.floating_full_name.value;
        const newBill = { email, amount, phone, fullName }
        fetch(`http://localhost:5000/update-billing/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBill),

        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    setRefetch(!refetch)
                    setUpdate(!update)
                }
            })
    }

    return (
        <>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="add-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box rounded-32 w-96">
                    <h1 className='text-center text-red-700 font-bold text-2xl'>Add / Update Bill</h1>
                    {/* form start ------------------------------------------------------------------------ */}
                    {
                        add ?

                            <form onSubmit={handelSubmit} className="py-10">
                                <div class="relative z-0 w-full mb-4 group">
                                    <input type="email" name="floating_email" placeholder="Email Address" className="input input-bordered input-error w-full" required /><br />
                                </div>
                                <div class="relative z-0 w-full mb-4 group">
                                    <input type="text" name="floating_full_name" placeholder="Full Name" className="input input-bordered input-error w-full" required /><br />
                                </div>

                                <div>
                                    <div class="relative z-0 w-full mb-4 group">
                                        <input type="text" pattern="[0-9]{11}" name="floating_phone" placeholder="Phone" className="input input-bordered input-error w-full" required /><br />
                                    </div>
                                    <div class="relative z-0 w-full mb-8 group">
                                        <input type="text" name="floating_amount" placeholder="Full Name" className="input input-bordered input-error w-full" required /><br />
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <button type="submit" class="text-white rounded bg-red-700 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>

                                    <button class="text-white bg-black hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded" onClick={() => setAdd(!add)}> Cancel</button>
                                </div>

                            </form> :


                            <form  onSubmit={handelUpdate} className="py-10">
                                <div class="relative z-0 w-full mb-4 group">
                                    <input type="email" name="floating_email" placeholder="Email Address" className="input input-bordered input-error w-full" required /><br />
                                </div>
                                <div class="relative z-0 w-full mb-4 group">
                                    <input type="text" name="floating_full_name" placeholder="Full Name" className="input input-bordered input-error w-full" required /><br />
                                </div>

                                <div>
                                    <div class="relative z-0 w-full mb-4 group">
                                        <input type="text" pattern="[0-9]{11}" name="floating_phone" placeholder="Phone" className="input input-bordered input-error w-full" required /><br />
                                    </div>
                                    <div class="relative z-0 w-full mb-8 group">
                                        <input type="text" name="floating_amount" placeholder="Full Name" className="input input-bordered input-error w-full" required /><br />
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <button type="submit" class="text-white rounded bg-red-700 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>

                                    <button class="text-white bg-black hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded" onClick={() => setUpdate(!update)}> Cancel</button>
                                </div>

                            </form>

                           
                            

                    }


                    {/* form end ------------------------------------------------------------------------ */}


                </div>
            </div>
        </>
    );
};

export default BillingModal;