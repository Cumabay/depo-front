import React from 'react'

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.truckNum}</td>
      <button
        className='btn boxRed yellow darken-4'
        type='button'
        onClick={(event) => handleEditClick(event, contact)}
      >
        Редактировать
      </button>
      <button
        className='btn boxRed red darken-4'
        type='button'
        onClick={() => handleDeleteClick(contact.id)}
      >
        Удалить
      </button>
    </tr>
  )
}

export default ReadOnlyRow