import React, { useState, Fragment } from 'react'
import data from '../../mock-data.json'
import { nanoid } from 'nanoid'
import ReadOnlyRow from '../ReadOnlyRow'
import EditableRow from '../EditableRow'

function History() {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    truckNum: '',
  })

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    truckNum: '',
  })

  const [editContactId, setEditContactId] = useState(null)

  const handleAddFormChance = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')



    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleEditFormChance = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value


    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }


  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      truckNum: addFormData.truckNum.toUpperCase(),
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault()
    setEditContactId(contact.id)

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      truckNum: contact.truckNum,
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === contactId)

    newContacts.splice(index, 1)

    setContacts(newContacts);
  }

  const handleEditFormCSubmit = (event) => {
    event.preventDefault()

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber.toUpperCase(),
      truckNum: editFormData.truckNum.toUpperCase(),
    }

    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) =>
      contact.id === editContactId)

    newContacts[index] = editedContact

    setContacts(newContacts)
    setEditContactId()
  }

  return (
    <div className='conteiner contentHistory'>
      <form onSubmit={handleEditFormCSubmit}>
        <table className="centered">
          <thead className="card-panel green lighten-5">
            <tr>
              <th>Имя Фамилия</th>
              <th>Адрес Отправки</th>
              <th>Номер Телефона</th>
              <th>Номер Машины</th>
              <th>Настройки</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChance={handleEditFormChance}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default History