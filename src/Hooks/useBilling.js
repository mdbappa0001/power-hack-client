import { useEffect, useState } from "react";

const useBilling = (page, text) => {
    const [billings, setBillings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/billing-list?page=${page}&search=${text}`)
            .then(res => res.json())
            .then(result => {
                setBillings(result.result)
            })
    }, [page, text])
    return [billings]
}
export default useBilling;