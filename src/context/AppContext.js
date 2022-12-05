import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseURL } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // set json-server data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // set initial form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  //
  const [editMode, setEditMode] = useState(false);
  const [userID, setUserID] = useState(null);

  const navigate = useNavigate();

  // load json data
  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(baseURL);
    setData(response.data);
    setLoading(false);
  };

  // add onclick
  const handleAddContact = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !address) {
      toast.error('Please provide the neccessary details on the form');
    } else {
      const addContactPayload = {
        name: name,
        phone: phone,
        email: email,
        address: address,
      };

      axios.post(baseURL, addContactPayload);
      toast.success('Contact added');
      setName();
      setEmail();
      setPhone();
      setAddress();
      setTimeout(() => loadData(), 500);
    }
    // console.log('details', addContactPayload);
  };

  // delete onclick
  const handleDeleteContact = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      await axios.delete(`${baseURL}/${id}`);
      toast.success('Contact deleted');
      setTimeout(() => loadData(), 500);
    }
  };

  // view onclick
  const handleViewContact = (id) => {
    setUserID(id);
    navigate(`view/${id}`);
  };

  const singleContact = data.find((item) => item.id === userID);

  // edit onclick
  const handleEditContact = (id) => {
    setEditMode(true);
    setUserID(id);
    navigate(`edit/${id}`);
  };

  //search
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`${baseURL}?q=${searchQuery}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setSearchQuery('');
      })
      .catch((error) => console.log(error));
  };

  const handleResetData = () => {
    loadData();
  };

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        loadData,
        handleDeleteContact,
        name,
        email,
        phone,
        address,
        setName,
        setEmail,
        setPhone,
        setAddress,
        handleAddContact,
        editMode,
        setEditMode,
        userID,
        setUserID,
        singleContact,
        handleViewContact,
        handleEditContact,
        searchQuery,
        setSearchQuery,
        handleSearch,
        handleResetData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
