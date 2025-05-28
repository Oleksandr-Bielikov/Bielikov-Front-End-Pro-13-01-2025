import Button from "../Button";
import Modal from "../Modal";

function ContactsTable({users, onDelete, onEdit}) {
    return (
    <>
      <h3>Список контактів</h3>
        <table style={{border: "2px solid"}}>
            <thead>   
            <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Телефон</th>
                <th colSpan={2}>Дії</th>    
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
                            <td><Button title={"РЕДАГУВАТИ"} className="edit" onClick={() => onEdit(index)} /></td>
                            <td><Modal onDelete={onDelete} index={index} /></td>
                    </tr>
                )
                })}
            </tbody>
        </table>
    </>
  )
}

export default ContactsTable;