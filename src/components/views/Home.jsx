import { useState, useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'

import { FaUserEdit, FaUserTimes } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    axios
    .get('/db.json/users')
    .then(response => {})
  
  }, [])
  

  return (
    <div>
      <table striped responsive>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <span className='d-flex'>
                <FaUserEdit className='mx-2 icon-style edit-icon' />{' '}
                <FaUserTimes className='mx-2 icon-style del-icon' />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
