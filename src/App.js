import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/global/Header';
import About from './components/views/About';
import AddEdit from './components/views/AddEdit';
import Home from './components/views/Home';

function App() {
  return (
    <>
      <Header />
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='add' element={<AddEdit />} />
          <Route path='update/:id' element={<AddEdit />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
