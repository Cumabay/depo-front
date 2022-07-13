import React from 'react'

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Фамилия Имя"
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Направление"
        ></input></td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Телефон:"
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="truckNum"
          required="required"
          placeholder="Номер машины"
        ></input>
      </td>
    </tr>
  )
}

export default EditableRow