import { useContext } from 'react';
import AppContext from '../../context/AppContext';
// import Pagination from 'react-bootstrap/Pagination';
import { FaUserEdit, FaUserTimes } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';

import AppPagination from '../global/Pagination';

const WebData = () => {
  const {
    data,
    loading,
    // loadData,
    handleDeleteContact,
    handleViewContact,
    handleEditContact,
    searchQuery,
    // currentPage,
    // setCurrentPage,
    // pageLimit,
    // setPageLimit,
  } = useContext(AppContext);

  return (
    <>
      <table className='col-xl-12 col-md-12 col-sm-12 home-web'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Address</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loading && data.length === 0 ? (
            <tr>
              <td>
                <h6 style={{ width: '100%', margin: '10px auto' }}>
                  {loading & searchQuery.length > 0
                    ? 'oops... no data found'
                    : 'Fetching data...'}
                </h6>
              </td>
            </tr>
          ) : (
            <>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className='firstletters'>
                    {item.name
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase()}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>{item.status}</td>
                  <td>
                    <span className='d-flex'>
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
                    </span>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      <AppPagination />
    </>
  );
};

export default WebData;
