import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const AppPagination = () => {
  const { data, loadData, currentPage, pageLimit, operation, sortFilterValue } =
    useContext(AppContext);

  const buttonStyle = {
    backgroundColor: '#0F84A2',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <>
      {data.length < 4 && currentPage === 0 ? null : (
        <>
          {currentPage === 0 ? (
            <div
              className='d-flex justify-content-center'
              style={{ fontSize: '12px' }}
            >
              <div style={{ margin: 'auto 10px' }}>{currentPage + 1}</div>
              <button
                style={buttonStyle}
                onClick={() => loadData(4, 8, 1, operation, sortFilterValue)}
              >
                <span>Next</span> <FaAngleRight className='ms-1' />
              </button>
            </div>
          ) : currentPage < pageLimit - 1 && data.length === pageLimit ? (
            <div
              className='d-flex justify-content-center'
              style={{ fontSize: '12px' }}
            >
              <button
                style={buttonStyle}
                onClick={() =>
                  loadData(
                    (currentPage - 1) * 4,
                    currentPage * 4,
                    -1,
                    operation,
                    sortFilterValue
                  )
                }
              >
                <FaAngleLeft className='me-1' />
                <span>Prev</span>
              </button>
              <div style={{ margin: 'auto 10px' }}>{currentPage + 1}</div>
              <button
                style={buttonStyle}
                onClick={() =>
                  loadData(
                    (currentPage + 1) * 4,
                    (currentPage + 2) * 4,
                    1,
                    operation,
                    sortFilterValue
                  )
                }
              >
                <span>Next</span> <FaAngleRight className='ms-1' />
              </button>
            </div>
          ) : (
            <div
              className='d-flex justify-content-center'
              style={{ fontSize: '12px' }}
            >
              <button
                style={buttonStyle}
                onClick={() =>
                  loadData(
                    (currentPage - 1) * 4,
                    currentPage * 4,
                    -1,
                    operation,
                    sortFilterValue
                  )
                }
              >
                <FaAngleLeft className='me-1' />
                <span>Prev</span>
              </button>
              <div style={{ margin: 'auto 10px' }}>{currentPage + 1}</div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AppPagination;
