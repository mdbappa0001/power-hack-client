import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBilling from '../../Hooks/useBilling';
import AddBillingHeader from './AddBillingHeader';
import BillingTable from './BillingTable';
import { toast } from 'react-toastify';
const Billing = ({ count, setCount, refetch, setRefetch }) => {

    const [add, setAdd] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)

    const [text, setText] = useState('')
    const pages = Math.ceil(count / 10);
    const [newAdded, setNewAdded] = useState({})
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    console.log(text)
    const [billings] = useBilling(currentPage, text, refetch)
    const handelSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(loading)
        const email = e.target.floating_email.value;
        const amount = e.target.floating_amount.value;
        const phone = e.target.floating_phone.value;
        const fullName = e.target.floating_full_name.value;
        const newBill = { email, amount, phone, fullName }
        setNewAdded(newBill)
        setAdd(!add)
        setCount(count + 1)
        fetch('https://demo-deploy-app-50.herokuapp.com/add-billing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newBill),

        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/login');
                    localStorage.removeItem('accessToken');

                    toast.error("Logged out, Login Again!!")
                }
                return res.json()
            })
            .then(data => {

                if (data.acknowledged) {
                    setLoading(false)
                    setRefetch(refetch + 1)
                }
            })
    }




    return (
        <>
            <AddBillingHeader
                add={add}
                setAdd={setAdd}
                handelSubmit={handelSubmit}
                setText={setText}


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