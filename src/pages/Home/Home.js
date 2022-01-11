import { useState, useEffect } from 'react';
import Search from "../../components/Search/Search";
import { Link } from "react-router-dom";
import HomeLogic from "./HomeLogic";

const Home = () => {
    const [ term, setTerm ] = useState(null);
    const [ filter, setFilter ] = useState(null);
    const [ url, setUrl ] = useState('http://localhost:8000/appointments');

    useEffect(() => {
        let baseUrl = 'http://localhost:8000/appointments';

        if(filter) {
            baseUrl += `?status=${filter}`;
        }

        if(term) {
            baseUrl += `&q=${term}`;
        }


        setUrl(baseUrl);
    }, [term, filter])

    const handleSearch = (e) => {
        setTerm(e);
    }

    const handleFilter = (e) => {
        setFilter(e);
    }

    return (
        <div className="container h-full lg:p-2 md:p-2 sm:p-1 p-0">
            <div className="flex mb-4 lg:p-5 md:p-5 sm:p-4 p-3 lg:m-3 md:m-3 sm:m-2 m-0 lg:flex-row md:flex-col sm:flex-col flex-col">
                <div className="h-12 lg:w-1/4 md:w-full sm:w-full w-full">
                    <h1 className="text-3xl h-full block text-slate-50 lg:text-left md:text-center sm:text-center text-center">calendar</h1>
                </div>
                <div className="h-12 lg:w-3/4 lg:mt-0 md:w-full sm:w-full w-full md:mt-2 sm:mt-2 mt-2">
                    <Search onChange={handleSearch} onFilterChange={handleFilter}/>
                </div>
            </div>

            <div className="flex flex-row h-fit md:relative sm:relative relative">
                <div className="w-full h-full lg:p-5 md:p-5 sm:p-4 p-3">
                    <HomeLogic url={url}/>
                    <Link to="/add" className="lg:static md:static sm:fixed fixed sm:right-3 right-5 sm:bottom-3 bottom-5 hover:bg-blue-700 text-white font-normal float-right lg:bg-blue-500 md:bg-blue-500 sm:bg-blue-500/[.50] bg-blue-500/[.50] lg:h-24 md:h-24 sm:h-20 h-20 lg:w-24 md:w-24 sm:w-20 w-20 py-4 px-0 lg:leading-loose md:leading-loose sm:leading-normal leading-normal rounded-full text-3xl">add</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;