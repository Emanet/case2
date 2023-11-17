import { FetchArtwork } from '@/app/api/services/Artwork'
import React from 'react'
import { useEffect, useState } from 'react'


function Homepage() {
    const [artWork, setArtwork] = useState([])
    const [currentPage, setCurrentPage] = useState("1")
    const FetchData = () => {
        FetchArtwork({ currentPage }).then((data) => {
            setArtwork(oldArray => [...oldArray, data]);
        })
    }
    useEffect(() => {
        FetchData()
    }, []);

    console.log((artWork), "artwork");

    return (
        <div>
            {
                artWork && artWork.map((item, index) => (

                    <div key={index}>
                        {
                            item.data.map((art) => (
                                <div key={index}>
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
        </div>
    )
}

export default Homepage