import React, { useEffect, useState } from 'react';
import useBilling from '../../Hooks/useBilling';
import AddBillingHeader from './AddBillingHeader';
import BillingTable from './BillingTable';

const Billing = () => {
    const [add, setAdd] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [billings] = useBilling(currentPage)
    const [count, setCount] = useState(0)
    const pages = Math.ceil(count / 10);
    useEffect(() => {
        fetch('http://localhost:5000/billingCount')
            .then(res => res.json())
            .then(result => {
                setCount(result.count)
            })
    }, [])
    return (
        <>
            <AddBillingHeader
                add={add}
                setAdd={setAdd}

            />
            <BillingTable add={add} setAdd={setAdd}
                billings={billings}
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
};

export default Billing;