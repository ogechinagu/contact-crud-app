import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

import { FaUserEdit, FaUserTimes } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';

const MobileHomeData = () => {
  const {
    data,
    loading,
    handleDeleteContact,
    handleViewContact,
    handleEditContact,
  } = useContext(AppContext);
  return (
    <>
      {loading && data.length === 0 ? (
        <div>Fetching data...</div>
      ) : (
        <>
          {data.map((item) => (
            <div
              key={item.id}
              className='mobile-card d-flex justify-content-between'
            >
              <div className='firstletters m-0'>
                {item.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .toUpperCase()}
              </div>
              <div className='mob-card-right'>
                <div
                  style={{ fontSize: '16px', fontWeight: '600', opacity: '.8' }}
                >
                  {item.name}
                </div>
                <div style={{ opacity: '.4' }}>{item.email}</div>
                <div>
                  <FiMoreHorizontal
                    className='mx-2 icon-style view-icon'
                    onClick={() => handleViewContact(item.id)}
                  />

                  <FaUserEdit
                    className='mx-2 icon-style edit-icon'
                    onClick={() => handleEditContact(item.id)}
                  />
                  <FaUserTimes
                    className='mx-2 icon-style del-icon'
                    onClick={() => handleDeleteContact(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default MobileHomeData;
