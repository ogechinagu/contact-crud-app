import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AppContext from '../../context/AppContext';

const SortModal = () => {
  const [show, setShow] = useState(false);

  const {
    sortValue,
    setSortValue,
    sortOrder,
    setSortOrder,
    sortOptions,
    handleSort,
  } = useContext(AppContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='sortby-btn' onClick={handleShow}>
        Sort by:
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sort by</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            style={{
              width: '90%',
              height: '40px',
              borderRadius: '4px',
              margin: '10px 20px',
              fontSize: '12px',
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
              width: '90%',
              height: '40px',
              borderRadius: '4px',
              margin: '10px 20px',
              fontSize: '12px',
            }}
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value=''>Select order</option>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='sortby-btn'
            onClick={() => {
              handleSort();
              handleClose();
            }}
            style={{
              width: '90%',
              height: '40px',
              borderRadius: '4px',
              margin: '10px 20px',
            }}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SortModal;
