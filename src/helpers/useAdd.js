import { useEffect, useState } from "react";
import axios from "axios";

const AddData = (url, data) => {
    const [ response, setResponse ] = useState(null);

    useEffect(() => {
        axios.post(url, data)
            .then(res => {
                setResponse(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [url, data])

    return { response }
}

export default AddData;