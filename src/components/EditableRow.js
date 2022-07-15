import React from 'react'

const EditableRow = ({ editFormData, handleEditFormChance }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Фамилия Имя"
          value={editFormData.fullName}
          onChange={handleEditFormChance}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Направление"
          value={editFormData.address}
          onChange={handleEditFormChance}
        ></input></td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Телефон:"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChance}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="truckNum"
          required="required"
          placeholder="Номер машины"
          value={editFormData.truckNum}
          onChange={handleEditFormChance}
        ></input>
      </td>
      <td>
        <button className='btn boxRed green darken-1' type='submit'>Сохранить</button>
      </td>
    </tr>
  )
}

export default EditableRow