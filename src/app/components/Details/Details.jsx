// DetailPage.js
import { FetchArtworkDetails } from '@/app/api/services/Artwork';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const [artworkDetails, setArtworkDetails] = useState(null);

  useEffect(() => {
    FetchArtworkDetails({ id }).then((data) => {
      setArtworkDetails(data);
    });

  }, [id]);

  if (!artworkDetails) {
    return <div>Loading...</div>;

  }

  console.log(artworkDetails.data.dimensions_detail[0]
    , "artwokasd");

  return (
    <div>
      <span>
        {artworkDetails.data.title}
      </span>
      <span>
        Date Start:
        {artworkDetails.data.date_start}
      </span>
      <span>
        Date End:
        {artworkDetails.data.date_end}
      </span>
      <span>
        <img src={`https://www.artic.edu/iiif/2/${artworkDetails?.data.image_id}/full/1686,/0/default.jpg`} width={60} height={60} alt="" />
      </span>
      <span>
        Date Display:
        {artworkDetails.data.date_display}
      </span>
      <span>
        Artist Display:
        {artworkDetails.data.artist_display}
      </span>
      <span>
        Place of Origin:
        {artworkDetails.data.place_of_origin}
      </span>
    </div>
  );
}

export default DetailPage;
