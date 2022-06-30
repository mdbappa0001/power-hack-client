import React, { useState } from 'react';
import AddBillingHeader from './AddBillingHeader';
import BillingTable from './BillingTable';

const Billing = () => {
    const [add, setAdd] = useState(false)
    return (
        <>
            <AddBillingHeader add={add} setAdd={setAdd} />
            <BillingTable add={add} setAdd={setAdd} />
        </>
    );
};

export default Billing;