import Button from "../Button";

function AddForm({name, surname, phone, onChangeName, onChangeSurname, onChangePhone, addUser, returnButton, editIndex}) {
    return (
        <>
        <h3>Форма додавання контакту</h3>
        <form onSubmit={addUser}>
            <label htmlFor="name">Ім'я</label>
            <input type="text" name="name" value={name} onChange={onChangeName} required/>
            <label htmlFor="surname">Прізвище</label>
            <input type="text" name="surname" value={surname} onChange={onChangeSurname} required/>
            <label htmlFor="phone">Номер телефону</label>
            <input type="tel" name="phone" value={phone} onChange={onChangePhone} required/>
            <Button type="submit" title={editIndex !== null ? "Зберегти зміни" : "Додати контакт"}/>
            <Button type="button" title={"Скасувати"} onClick={returnButton}/>
        </form>
        </>
    )
    
}

export default AddForm;