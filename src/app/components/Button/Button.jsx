import React from 'react'

const PaginationButtons = ({ onNext, onPrevious }) => {
  return (
    <div className='pl-40'>
      <button className='pr-20' onClick={onPrevious}>Previous Page</button>
      <button onClick={onNext}>Next Page</button>
    </div>
  );
};

export default PaginationButtons;