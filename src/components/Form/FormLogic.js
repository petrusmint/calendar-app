import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useDate from "../../helpers/useDate";
import axios from "axios";


const FormLogic = (data) => {
    const [ appointment, setAppointment ] = useState('');
    const [ status, setStatus ] = useState('');
    const [ date, setDate ] = useState(() => {return (data) ? data.date : ''});
    const [ id, setId ] = useState();
    const [ error, setError ] = useState();
    const [ deleteBtn, setDeleteBtn ] = useState(false);

    const { newDate } = useDate(date);
    const navigate = useNavigate();

    useEffect(() => {
        if(data && !id){
            setId(data.id);
            setAppointment(data.title);
            setStatus(data.status);
            setDeleteBtn(true);

            if(date) {
                setDate(newDate.toISOString().substring(0,10));
            }
        }
    }, [data, id, appointment, status, date, deleteBtn])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        console.log(e);

        const dataToSubmit = {
            title: appointment,
            status: status,
            date: newDate.toJSON(),
        }
        
        if(id) {
            const response = await axios.put(`http://localhost:8000/appointments/${id}`, dataToSubmit)
                .then(res => {
                    navigate('/');
                    return res.data;
                })
                .catch(err => {
                    setError("Something went wrong.");
                    console.log(err);
                })    
                
            return response;
        } else {
            const response = await axios.post(`http://localhost:8000/appointments/`, dataToSubmit)
                .then(res => {
                    navigate('/');
                    return res.data;
                })
                .catch(err => {
                    setError("Something went wrong.");
                    console.log(err);
                })

            return response;
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();

        if(id) {
            const response = await axios.delete(`http://localhost:8000/appointments/${id}`)
                .then(res => {
                    navigate('/');
                    return res.data;
                })
                .catch(err => {
                    setError("Something went wrong.");
                    console.log(err);
                })    
                
            return response;
        }
    }

    return {
        appointment,
        setAppointment,
        status,
        setStatus,
        date,
        setDate,
        handleSubmit,
        error,
        deleteBtn,
        handleDelete
    }
}

export default FormLogic;