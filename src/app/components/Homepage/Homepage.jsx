import React from 'react'
import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom';
import PaginationButtons from '../Button/Button'
import SearchFilter from '../Search/Search';
import endpoints from '../../api/endpoints'

function Homepage({
    currentPage,
    setCurrentPage,
    searchTerm,
    setSearchTerm
}) {
    const [artWorks, setArtworks] = useState(null);

    useEffect(() => {
        if (searchTerm) {
            endpoints.searchArtwork(searchTerm, currentPage).then(({ data }) => {
                setArtworks(data.data);
            })
        } else {
            endpoints.getArtworks(currentPage).then(({ data }) => {
                setArtworks(data.data);
            });
        }
    }, [currentPage, searchTerm])


    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className='flex justify-center'>
            <SearchFilter  searchTerm={searchTerm} onSearch={setSearchTerm} />
            </div>
            <div className='sm:grid-rows-1 grid lg:grid-rows-3 grid-flow-col gap-4 justify-center m-8' >
                {
                    artWorks && artWorks?.map((art, index) => (

                        <div className='block w-80 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' key={index}>
                            <div key={art.id}>
                                <Link to={`/${art.id}`}>
                                    <span>{art.title}</span>
                                    {
                                        !!art.image_id
                                        &&
                                        <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/1686,/0/default.jpg`} width={60} height={60} alt="" />
                                    }
                                </Link>
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className='flex justify-center flex-rows items-center'>
                <div>
                <span>Current Page: {currentPage}</span>
                </div>
                <PaginationButtons onNext={handleNext} onPrevious={handlePrevious} />
            </div>


        </div>

    )
}



export default Homepage;
