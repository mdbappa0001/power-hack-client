import { useEffect, useState } from "react";

const useBilling = () => {
    const [billings, setBillings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/billing-list')
            .then(res => res.json())
            .then(result => setBillings(result))
    }, [])

    return [billings]
}
export default useBilling;