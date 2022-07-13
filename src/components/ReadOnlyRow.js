import React from 'react'

const ReadOnlyRow = ({ contact, handleEditClick }) => {
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
    </tr>
  )
}

export default ReadOnlyRow