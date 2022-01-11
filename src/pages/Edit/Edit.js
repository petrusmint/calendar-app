import Form from "../../components/Form/Form";
import {useLocation} from 'react-router-dom';

const Edit = () => {
    const location = useLocation();

    return (
        <div className="container h-screen p-2">
            <Form formName={location.state.data.title} data={location.state.data}/>
        </div>
    )
}

export default Edit;