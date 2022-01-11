import { useState, useEffect } from 'react';
import useFetch from '../../helpers/useFetch';
import Card from '../../components/Card/Card';

const HomeLogic = ({url}) => {
    const { appointments } = useFetch(url);
    const [ cards, setCards ] = useState(null);

    useEffect(() => {
        if(appointments) {
            const newCards = appointments.map(data => {
                return ( <Card data={data} key={data.id}/> )
            })
    
            setCards(newCards);
        }
    }, [appointments])

    return (cards);
}

export default HomeLogic;