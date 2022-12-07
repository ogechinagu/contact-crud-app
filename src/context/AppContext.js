import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseURL } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  // set json-server data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // set initial form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');

  //
  const [editMode, setEditMode] = useState(false);
  const [userID, setUserID] = useState(null);

  //pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(4);

  //search/filter/Sort Value
  const [sortFilterValue, setSortFilterValue] = useState('');
  const [operation, setOperation] = useState('');

  // load json data
  useEffect(() => {
    setLoading(true);
    loadData(0, 4, 0); // eslint-disable-next-line
  }, []);

  const loadData = async (
    start,
    end,
    increase,
    optType = null,
    filterOrSortValue
  ) => {
    switch (optType) {
      case 'search':
        setOperation(optType);
        setSortValue('');
        return await axios
          .get(`${baseURL}?q=${searchQuery}&_start=${start}&_end=${end}`)
          .then((response) => {
            console.log(response);
            setLoading(true);
            setData(response.data);
            setCurrentPage(currentPage + increase);
            // setSearchQuery('');
          })
          .catch((error) => console.log(error));

      case 'sort':
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        return await axios
          .get(
            `${baseURL}?_sort=${filterOrSortValue}&_order=${sortOrder}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            console.log(response);
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((error) => console.log(error));

      case 'filter':
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        return await axios
          .get(
            `${baseURL}?status=${filterOrSortValue}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            console.log(response);
            setData(response.data);
            setCurrentPage(currentPage + increase);
            toast.success(`Showing ${filterOrSortValue} Contacts`);
          })
          .catch((error) => console.log(error));

      default:
        const response = await axios.get(
          `${baseURL}?_start=${start}&_end=${end}`
        );
        setLoading(false);
        setData(response.data);
        setCurrentPage(currentPage + increase);
    }
  };

  // add onclick
  const handleAddContact = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !address || !status) {
      toast.error('Please provide the neccessary details on the form');
    } else {
      const addContactPayload = {
        name: name,
        phone: phone,
        email: email,
        address: address,
        status: status,
      };

      axios.post(baseURL, addContactPayload);
      toast.success('Contact added');
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setStatus('');
      setTimeout(() => loadData(0, 4, 0), 500);
    }
    // console.log('details', addContactPayload);
  };

  // delete onclick
  const handleDeleteContact = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      await axios.delete(`${baseURL}/${id}`);
      toast.success('Contact deleted');
      setTimeout(() => loadData(0, 4, 0), 500);
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
    loadData(0, 4, 0, 'search');
    // return await axios
    //       .get(`${baseURL}?q=${searchQuery}&_start=${start}&_end=${end}`)
    //       .then((response) => {
    //         console.log(response);
    //         setLoading(true);
    //         setData(response.data);
    //         setCurrentPage(currentPage + increase);
    //         // setSearchQuery('');
    //       })
    //       .catch((error) => console.log(error));
  };

  //reset data
  const handleResetData = () => {
    setOperation('');
    setSearchQuery('');
    setSortFilterValue('');
    setSortOrder('');
    setSortValue('');
    loadData(0, 4, 0);
  };

  const [sortValue, setSortValue] = useState();
  const [sortOrder, setSortOrder] = useState();

  const sortOptions = ['name', 'phone', 'email', 'address'];

  const handleSort = async (e) => {
    if (sortValue && sortOrder) {
      console.log('Sort by:', sortValue, ' ', sortOrder);
      loadData(0, 4, 0, 'sort', sortValue);
      // return await axios
      //   .get(`${baseURL}?_sort=${sortValue}&_order=${sortOrder}`)
      //   .then((response) => {
      //     console.log(response);
      //     setData(response.data);
      //   })
      //   .catch((error) => console.log(error));
    } else {
      toast.error('Select a sort value and order');
    }
  };

  const handleFilter = async (value) => {
    loadData(0, 4, 0, 'filter', value);
    // return await axios
    //   .get(`${baseURL}?status=${value}`)
    //   .then((response) => {
    //     console.log(response);
    //     setData(response.data);
    //     toast.success(`Showing ${value} Contacts`);
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        loading,
        loadData,
        handleDeleteContact,
        name,
        email,
        phone,
        address,
        status,
        setName,
        setEmail,
        setPhone,
        setAddress,
        setStatus,
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
        handleResetData,
        sortValue,
        setSortValue,
        sortOrder,
        setSortOrder,
        sortOptions,
        handleSort,
        handleFilter,
        currentPage,
        setCurrentPage,
        pageLimit,
        setPageLimit,
        operation,
        sortFilterValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
