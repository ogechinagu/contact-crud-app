import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './components/context/AppContext';
import Header from './components/global/Header';
import About from './components/pages/About';
import AddContact from './components/pages/AddContact';
import EditContact from './components/pages/EditContact';
import Home from './components/pages/Home';
import ViewContact from './components/pages/ViewContact';

function App() {
  return (
    <AppProvider>
      <Header />
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='add' element={<AddContact />} />
          <Route path='edit/:id' element={<EditContact />} />
          <Route path='view/:id' element={<ViewContact />} />
        </Routes>
      </div>
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
