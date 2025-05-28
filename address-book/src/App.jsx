import { useState, useEffect } from 'react'
import './App.css'
import AddForm from './components/AddForm';
import ContactsTable from './components/ContactsTable';
import Button from './components/Button';
import { Alert } from '@mui/material';
import { Link, Route, Routes, useNavigate } from 'react-router';



function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, []);

  const addUser = (e) => {
    e.preventDefault()
    const newUser = { name: `${name} ${surname}`, phone };
    if (editIndex !== null) {
      const updatedUsers = [...users]
      updatedUsers[editIndex] = newUser
      setUsers(updatedUsers)
      setEditIndex(null)
    } else {
      setUsers([...users, newUser]);
    }

    setName('')
    setSurname('')
    setPhone('')
    navigate('/contacts-table')
  };

  const deleteUser = (removeIndex) => {
    setUsers(users.filter((item, index) => index !== removeIndex))
    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 3000);
  }

  const editUser = (index) => {
    const [userName, ...userSurname] = users[index].name.split(' ');
    setName(userName)
    setSurname(userSurname.join(' '))
    setPhone(users[index].phone)
    setEditIndex(index);
    navigate('/add-form')
  }

  const returnButton = () => {
    setName('')
    setSurname('')
    setPhone('')
    setEditIndex(null)
    navigate('/contacts-table')
  }
  return (
    <>
        <nav>
        <Link to={'/contacts-table'}><Button title={"Список контактів"}/></Link>
        <Link to={'/add-form'}><Button title={"Форма додавання контакту"}/></Link> 
       </nav>
      <Routes>
        <Route index path='/contacts-table' element={
            <>
            {showAlert && (
              <Alert severity="success" sx={{ my: 2 }}>
              Контакт успішно видалено!
            </Alert>
            )}
          <ContactsTable
            users={users}
              onDelete={deleteUser}
              onEdit={editUser}
              
            />
          </>
        } />
        <Route path='/add-form' element={
            <AddForm
            name={name}
            surname={surname}
            phone={phone}
            onChangeName={(e) => setName(e.target.value)}
            onChangeSurname={(e) => setSurname(e.target.value)}
            onChangePhone={(e) => setPhone(e.target.value)}
            addUser={addUser}
            returnButton={returnButton}
            editIndex={editIndex}
              />
        } />
      </Routes>
    </>
  );
}

export default App;