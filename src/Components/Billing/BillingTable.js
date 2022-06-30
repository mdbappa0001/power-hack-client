import React, { useState } from 'react';
import BillingRow from './BillingRow';

const BillingTable = ({ add, setAdd }) => {

    return (


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-20 mt-6">
            <table class="w-full text-sm text-left text-gray-500 cursor-default">
                <thead class="text-xs text-gray-700 uppercase bg-gray-300  ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Billing Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Full Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Paid Amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <BillingRow add={add} setAdd={setAdd} />


                </tbody>
            </table>
        </div>


    );
};

export default BillingTable;