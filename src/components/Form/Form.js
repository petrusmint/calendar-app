import { Link } from "react-router-dom";
import FormLogic from "./FormLogic";

const Form = ({ data, formName }) => {
    const { 
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
    } = FormLogic(data);

    return (
        <>
            <div className="flex mb-4 p-5 lg:flex-row md:flex-row sm:flex-col flex-col">
                <div className="lg:w-1/3 md:w-1/3 sm:w-full w-full h-12">
                    <Link to="/" className="text-2xl h-full block text-slate-50 text-left">back</Link>
                </div>
                <div className="lg:w-1/3 md:w-1/3 sm:w-full w-full h-12">
                    <h1 className="text-3xl text-center h-full block text-slate-50">{formName}</h1>
                </div>
            </div>

            <div className="flex flex-row h-fit">
                <div className="w-full h-full p-5">
                    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-white font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    appointment
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input 
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="inline-full-name" 
                                    type="text" 
                                    required
                                    value={appointment}
                                    onChange={(e) => setAppointment(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-white font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-date">
                                    date
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input 
                                    type="date" 
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    placeholder="Select date"
                                    required
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-white font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-status">
                                    status
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <select 
                                    value={status}
                                    required
                                    onChange={(e) => setStatus(e.target.value)} 
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option value="" disabled hidden>select status</option>
                                        <option value="pending">pending</option>
                                        <option value="on-going">on-going</option>
                                        <option value="done">done</option>
                                </select>
                                <input 
                                    type="hidden" 
                                    value={status}
                                />
                            </div>
                        </div>
                        
                        <div className="md:flex md:items-center">
                            <div className="md:w-2/3">
                                <label className="block text-red-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-date">
                                    {error}
                                </label>
                            </div>
                            <div className="md:w-1/3 text-right">
                                {deleteBtn && <button 
                                    className="lg:mb-4 md:mb-4 sm:mb-0 mb-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                                    type="button"
                                    onClick={handleDelete}
                                    >delete
                                </button>}
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                                    submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;