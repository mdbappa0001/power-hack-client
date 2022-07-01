import React, { useEffect, useState } from 'react';
import useBilling from '../../Hooks/useBilling';
import AddBillingHeader from './AddBillingHeader';
import BillingTable from './BillingTable';

const Billing = () => {
    const [refetch, setRefetch] = useState(0)
    const [add, setAdd] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [billings] = useBilling(currentPage, refetch)
    const [count, setCount] = useState(0)
    const pages = Math.ceil(count / 10);
    const [newAdded, setNewAdded] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://demo-deploy-app-50.herokuapp.com/billingCount')
            .then(res => res.json())
            .then(result => {
                setCount(result.count)
            })
    }, [])

    const handelSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        const email = e.target.floating_email.value;
        const amount = e.target.floating_amount.value;
        const phone = e.target.floating_phone.value;
        const fullName = e.target.floating_full_name.value;
        const newBill = { email, amount, phone, fullName }
        setNewAdded(newBill)
        setLoading(true)
        fetch('https://demo-deploy-app-50.herokuapp.com/add-billing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBill),

        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    setRefetch(refetch + 1)
                    setLoading(false)
                    setAdd(!add)
                }
            })
    }




    return (
        <>
            <AddBillingHeader
                add={add}
                setAdd={setAdd}
                handelSubmit={handelSubmit}


            />
            <BillingTable
                setRefetch={setRefetch}
                refetch={refetch}
                billings={billings}
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                newAdded={newAdded}
                loading={loading}

            />
        </>
    );
};

export default Billing;