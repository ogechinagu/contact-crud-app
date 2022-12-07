import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

import { FaSort } from 'react-icons/fa';

const Sort = () => {
  const {
    sortValue,
    setSortValue,
    sortOrder,
    setSortOrder,
    sortOptions,
    handleSort,
  } = useContext(AppContext);
  return (
    <div className='sortby-nav'>
      Sort by:{' '}
      <select
        style={{
          width: '150px',
          height: '30px',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
        onChange={(e) => setSortValue(e.target.value)}
        value={sortValue}
      >
        <option value=''>Select option</option>
        {sortOptions.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        style={{
          width: '150px',
          height: '30px',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
        onChange={(e) => setSortOrder(e.target.value)}
        value={sortOrder}
      >
        <option value=''>Select order</option>
        <option value='asc'>Ascending</option>
        <option value='desc'>Descending</option>
      </select>
      <button onClick={handleSort} className='sortby-btn'>
        <span>Sort</span> <FaSort />
      </button>
    </div>
  );
};

export default Sort;
