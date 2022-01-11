const Search = ({onChange, onFilterChange}) => {

    const handleSearchInput = (e) => {
        onChange(e.target.value);
    }

    const handleFilterInput = (e) => {
        onFilterChange(e.target.value)
    }

    return (
        <div>
            <div className="relative lg:text-right md:text-center sm:text-center"> 
                <label className="text-white" htmlFor="inline-status">
                    Filter by :
                </label>
                <select 
                    defaultValue=""
                    required
                    onChange={handleFilterInput} 
                    className="bg-gray-500 text-white appearance-none rounded w-30 mr-2 py-2 px-4 leading-tight">
                        <option value="">none</option>
                        <option value="pending">pending</option>
                        <option value="on-going">on-going</option>
                        <option value="done">done</option>
                </select>

                <input 
                    onChange={handleSearchInput} 
                    type="text" 
                    className="shadow-lg h-12 lg:w-96 md:w-80 sm:w-64 w-full sm:mt-1.5 mt-2 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" 
                    placeholder="search label..." />

                <div className="absolute top-4 right-3"> 
                    <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> 
                </div>
            </div>
        </div>
    )
}

export default Search