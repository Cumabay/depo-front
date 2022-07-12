import React, { useState } from 'react'
import data from '../mock-data.json'

function Table() {
  const [contacts, SetContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const handleAddFormChance = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  return (<div className="conteiner content">
    <h4>Добавить Заезд</h4>
    <form>
      <input type="text"
        name="fullName"
        required="required"
        placeholder="Введите И. Ф"
        onChange={handleAddFormChance}
        />
      <input type="text"
        name="address"
        required="required"
        placeholder="Введите Адрес" 
        onChange={handleAddFormChance}
        />
      <input type="number"
        name="phoneNumber"
        required="required"
        placeholder="Введите Номер" 
        onChange={handleAddFormChance}
        />
      <input type="email"
        name="email"
        required="required"
        placeholder="Введите Почту" 
        onChange={handleAddFormChance}
        />
      <button className="btn boxBtn" type="submit">Добавить</button>
    </form>
    <table className="centered">
      <thead className="card-panel green lighten-5">
        <tr>
          <th>Имя Фамилия</th>
          <th>Адрес Отправки</th>
          <th>Номер Телефона</th>
          <th>Номер Машины</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table