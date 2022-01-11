import { useEffect, useState } from "react";
import useDate from "../../helpers/useDate";
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
    const [ convertedDate, setConvertedDate ] = useState(null);
    const { newDate } = useDate(data.date);
    const navigate = useNavigate();

    useEffect(()=> {
        if(data) {
            setConvertedDate(newDate.toLocaleDateString());
        }
    }, [data])

    const handleRoute = () => {
        navigate('/edit', { state: { data }});
    }

    return (
        <div className="lg:m-1 md:m-0 sm:m-0 m-0 text-center">
            <div onClick={handleRoute} className="cursor-pointer mx-auto max-w-md lg:py-4 md:py-3 sm:py-3 py-2 lg:px-8 md:px-6 sm:px-5 px-3 bg-white shadow-lg rounded my-10">
                <div>
                    <h2 className="text-gray-800 text-left lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-semibold mb-2">{ data.title }</h2>
                </div>

                <div className="flex flex-row">
                    <div className="w-full bg-white-500 h-full">
                        <p className="text-lg text-left">{ data.status }</p>
                    </div>
                    <div className="w-full bg-white-500 h-full">
                        <p className="text-lg text-right">{ convertedDate }</p>
                    </div>
                </div>
               
            </div>  
        </div>
    )
}

export default Card;