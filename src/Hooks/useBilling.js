import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const useBilling = (page, text, refetch) => {
    const [billings, setBillings] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://demo-deploy-app-50.herokuapp.com/billing-list?page=${page}&search=${text}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                console.log(res)
                if (res.status === 401 || res.status === 403) {
                    navigate('/login');
                    localStorage.removeItem('accessToken');
                    toast.error("Logged out, Login Again!!")


                }
                return res.json()
            })
            .then(result => {
                setBillings(result.result)
            })
    }, [page, text, refetch, navigate])
    return [billings]
}
export default useBilling;