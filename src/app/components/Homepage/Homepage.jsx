import { FetchArtwork } from '@/app/api/services/Artwork'
import React from 'react'
import { useEffect, useState } from 'react'
import PaginationButtons from '../Button/Button'


function Homepage() {
    const [artWork, setArtwork] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const FetchData = () => {
        FetchArtwork({ currentPage }).then((data) => {
            setArtwork([data]);
        })
    }

    useEffect(() => {
        FetchData()
    }, [currentPage]);

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    console.log((artWork), "artwork");

    return (
        <div>
            {
                artWork && artWork.map((item, index) => (

                    <div key={index}>
                        {
                            item.data.map((art) => (
                                <div key={art.image_id}>
                                    <span>
                                        {art.title}
                                    </span>
                                    <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/1686,/0/default.jpg`} width={60} height={60} alt="" srcset="" />
                                </div>
                            ))
                        }
                    </div>

                ))
            }
            <PaginationButtons onNext={handleNext} onPrevious={handlePrevious} />
        </div>

    )
}



export default Homepage;
