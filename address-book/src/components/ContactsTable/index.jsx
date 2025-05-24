import Button from "../Button";

function ContactsTable({users, onDelete}) {
    return (
    <>
      <h3>Список контактів</h3>
        <table style={{border: "2px solid"}}>
            <thead>   
            <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Телефон</th>
                <th>Дії</th>    
            </tr>
            </thead>
            <tbody>     
                {users.map((user, index) => { 
                const [name, ...surnameParts] = user.name.split(' ');
                const surname = surnameParts.join(' ');
                    return (
                    <tr key={index}>
                        <td>{name}</td>
                        <td>{surname}</td>
                        <td>{user.phone}</td>
                        <td><Button title={"Видалити"} onClick={() => onDelete(index)}/></td>
                    </tr>
                )
                })}
            </tbody>
        </table>
    </>
  )
}

export default ContactsTable;