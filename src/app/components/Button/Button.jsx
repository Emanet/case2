import React from 'react'

const PaginationButtons = ({ onNext, onPrevious }) => {
  return (
    <div>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default PaginationButtons;