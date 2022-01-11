import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [ appointments, setAppointments ] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setAppointments(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [url])

    return { appointments }
}

export default useFetch;