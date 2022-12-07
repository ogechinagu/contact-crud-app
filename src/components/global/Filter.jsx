import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Filter = () => {
  const mql = window.matchMedia('(max-width: 800px)');
  const onMobileDevice = mql.matches;

  const { handleFilter } = useContext(AppContext);
  return (
    <div className='sortby-nav'>
      
      {onMobileDevice ? (
        <div className='d-flex justify-content-sm-start align-items-center'>
          <>Filter:</>
          <button onClick={() => handleFilter('Active')} className='sortby-btn'>
            Active
          </button>
          <button
            onClick={() => handleFilter('Inactive')}
            className='sortby-btn'
            style={{ backgroundColor: '#c82333' }}
          >
            Inactive
          </button>
        </div>
      ) : (
        <>
          <button onClick={() => handleFilter('Active')} className='sortby-btn'>
            Active
          </button>
          <button
            onClick={() => handleFilter('Inactive')}
            className='sortby-btn'
            style={{ backgroundColor: '#c82333' }}
          >
            Inactive
          </button>
        </>
      )}
    </div>
  );
};

export default Filter;
