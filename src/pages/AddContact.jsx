import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import AppContext from '../context/AppContext';

const AddContact = () => {
  const {
    name,
    email,
    phone,
    address,
    setName,
    setEmail,
    setPhone,
    setAddress,
    setStatus,
    handleAddContact,
  } = useContext(AppContext);

  return (
    <div>
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
          <Form className='d-block mx-auto' onSubmit={handleAddContact}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Jane Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <div className='row'>
              <Form.Group className='col-md-6 col-sm-12'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type='email'
                  placeholder='jane.doe@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='col-md-6 col-sm-12'>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  required
                  type='number'
                  placeholder='2348123456789'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </div>

            <div className='row'>
              <Form.Group className='col-md-12 col-sm-12'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Plot 4 Example Street, Earth'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
            </div>

            <Form.Group>
              <Form.Label>Status</Form.Label>
              <div className='mb-3'>
                <Form.Check
                  inline
                  label='Active'
                  name='statusValue'
                  type='radio'
                  value='Active'
                  onChange={(e) => setStatus(e.target.value)}
                />
                <Form.Check
                  inline
                  label='Inactive'
                  name='statusValue'
                  type='radio'
                  value='Inactive'
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
            </Form.Group>

            <Form.Group>
              <div className='row'>
                <button type='submit' className='form-button'>
                  Add Contact
                </button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
