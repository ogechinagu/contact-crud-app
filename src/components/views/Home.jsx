import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseURL } from '../../utils/api';

import { FaUserEdit, FaUserTimes } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(baseURL);
    setData(response.data);
    setLoading(false);
  };

  console.log('User Data: ', data);

  return (
    <div>
      <table>
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
          {loading && data === 0 ? (
            <tr>
              <td>Fetching data...</td>
            </tr>
          ) : (
            <>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} />{' '}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>{item.status}</td>
                  <td>
                    <span className='d-flex'>
                      <FaUserEdit className='mx-2 icon-style edit-icon' />{' '}
                      <FaUserTimes className='mx-2 icon-style del-icon' />
                    </span>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
