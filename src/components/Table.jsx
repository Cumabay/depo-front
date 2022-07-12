import React, { useState } from 'react'
import data from '../mock-data.json'
import { nanoid } from 'nanoid'

function Table() {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    truckNum: ''
  })

  // eslint-disable-next-line no-extend-native
  String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  const handleAddFormChance = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value.capitalizeFirstLetter()

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }


  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      truckNum: addFormData.truckNum,
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  return (<div className="conteiner content">
    <h4>Добавить Заезд</h4>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text"
        name="fullName"
        required="required"
        placeholder="Фамилия Имя"
        onChange={handleAddFormChance}
      />
      <input type="text"
        name="address"
        required="required"
        placeholder="Направление"
        onChange={handleAddFormChance}
      />
      <input type="text"
        name="phoneNumber"
        required="required"
        placeholder="Телефон:"
        onChange={handleAddFormChance}
      />
      <input type="text"
        name="truckNum"
        required="required"
        placeholder="Номер машины"
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
            <td>{contact.truckNum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table