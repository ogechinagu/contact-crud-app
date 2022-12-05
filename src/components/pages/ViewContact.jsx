import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { IoIosMail, IoMdPhonePortrait, IoIosContact } from 'react-icons/io';
import { TiLocation } from 'react-icons/ti';

import '../styles/ViewContact.css';

const ViewContact = () => {
  const { singleContact } = useContext(AppContext);

  const { name, phone, email, address, status } = singleContact;

  const firstLetters = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className='contact-card'>
      <div className='contact-firstletters'>{firstLetters}</div>
      <h3 className='contact-title'>{name}</h3>
      <div className='d-flex justify-content-between'>
        <p className='contact-text'>
          <IoIosMail className='contact-icon' />
          Email
        </p>
        <p className='contact-value'>{email}</p>
      </div>
      <hr />
      <div className='d-flex justify-content-between'>
        <p className='contact-text'>
          <IoMdPhonePortrait className='contact-icon' />
          Phone Number
        </p>
        <p className='contact-value'>{phone}</p>
      </div>
      <hr />
      <div className='d-flex justify-content-between'>
        <p className='contact-text'>
          <TiLocation className='contact-icon' />
          Address
        </p>
        <p className='contact-value'>{address}</p>
      </div>
      <hr />
      <div className='d-flex justify-content-between'>
        <p className='contact-text'>
          <IoIosContact className='contact-icon' />
          Status
        </p>
        <p className='contact-value'>{status}</p>
      </div>
    </div>
  );
};

export default ViewContact;
