import { useState, useEffect } from 'react'
import './App.css'
import AddForm from './components/AddForm';
import ContactsTable from './components/ContactsTable';
import Button from './components/Button';

function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [page, setPage] = useState("contacts");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, []);

  const addUser = (e) => {
    e.preventDefault()
    const newUser = { name: `${name} ${surname}`, phone };
    setUsers([...users, newUser]);
    setName('')
    setSurname('')
    setPhone('')
    setPage('contacts')
  };

  const deleteUser = (removeIndex) => {
    setUsers(users.filter((item, index) => index !== removeIndex))
  }

  const returnButton = () => {

    setPage("contacts");
  }
  return (
    <>
      <nav>
        <Button onClick={() => setPage("contacts")} title={"Список контактів"}/>
        <Button onClick={() => setPage("addContact")} title={"Форма додавання контакту"}/>
      </nav>
      {page === "addContact" && (
        <AddForm
        name={name}
        surname={surname}
        phone={phone}
        onChangeName={(e) => setName(e.target.value)}
        onChangeSurname={(e) => setSurname(e.target.value)}
        onChangePhone={(e) => setPhone(e.target.value)}
        addUser={addUser}
        returnButton={returnButton}
      />
      )}
      {page === "contacts" && (
        <ContactsTable
        users={users}
        onDelete={deleteUser}
      />
      )}
      
    </>
  );
}

export default App;