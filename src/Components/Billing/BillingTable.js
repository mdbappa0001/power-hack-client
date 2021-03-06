import React from 'react';
import BillingRow from './BillingRow';

const BillingTable = ({ setCurrentPage, currentPage, pages, billings, newAdded, loading, refetch, setRefetch }) => {


    const temporary = [...billings, newAdded]
    return (

        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20 mt-6">
                <table className="w-full text-sm text-left text-gray-500 cursor-default">
                    <thead className="text-xs text-black uppercase bg-gray-400  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Billing Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Full Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Paid Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !loading &&
                            billings?.map(billing => <BillingRow billing={billing} key={billing._id} setRefetch={setRefetch}
                                refetch={refetch} />)

                        }
                        {
                            loading && temporary?.reverse().map(billing => <BillingRow billing={billing} key={billing._id} />)
                        }


                    </tbody>
                </table>
            </div>
            <div className='text-center my-5'>
                {
                    [...Array(pages).keys()].map(num => <button key={num} className={currentPage === num ? "btn btn-xs bg-blue-700 rounded mx-1" : "btn btn-xs rounded-none mx-1"}

                        onClick={() => setCurrentPage(num)}
                    >{num + 1}</button>)
                }
            </div>
        </>



    );
};

export default BillingTable;