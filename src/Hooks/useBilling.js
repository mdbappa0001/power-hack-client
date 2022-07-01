import { useEffect, useState } from "react";

const useBilling = (page, text, refetch) => {
    const [billings, setBillings] = useState([])
    useEffect(() => {
        fetch(`https://demo-deploy-app-50.herokuapp.com/billing-list?page=${page}&search=${text}`)
            .then(res => res.json())
            .then(result => {
                setBillings(result.result)
            })
    }, [page, text, refetch])
    return [billings]
}
export default useBilling;