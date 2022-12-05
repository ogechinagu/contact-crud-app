import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './context/AppContext';
import Header from './components/global/Header';
import About from './pages/About';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import Home from './pages/Home';
import ViewContact from './pages/ViewContact';

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
