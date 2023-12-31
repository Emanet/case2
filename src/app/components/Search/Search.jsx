import React from 'react'


function SearchFilter({ onSearch, searchTerm }) {
    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by title"
                onChange={handleSearch}
                value={searchTerm}
            />
        </div>
    );
}

export default SearchFilter;