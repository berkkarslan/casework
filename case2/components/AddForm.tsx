import React, { useState, useEffect } from 'react'
import { addNewUser, selectAllData, updateUser } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
type Props = {
  edit: number | null
  editDone: () => void
}

export const AddForm: React.FC<Props> = ({ edit, editDone }) => {
  const [name, setName] = useState('')
  const [familyName, setFamilyName] = useState('')
  const [phone, setPhone] = useState('')
  const users: MyData[] = useSelector(selectAllData)
  const dispatch = useDispatch()

  const submitForm = () => {
    const data: MyData = { id: edit ? edit : users.length + 1, name, familyName, phone }
    dispatch(edit ? updateUser(data) : addNewUser(data))
    setName('')
    setFamilyName('')
    setPhone('')
    editDone()
  }

  useEffect(() => {
    if (edit) {
      const user = users.find((item) => item.id === edit)
      if (user) {
        setName(user.name)
        setFamilyName(user.familyName)
        setPhone(user.phone)
      }
    }
  }, [edit, users])

  return (
    <div className="col border px-3 py-3 my-3">
      <div className="mb-3">
        <label htmlFor="adInput" className="form-label">
          Ad:
        </label>
        <input
          type="text"
          className="form-control"
          id="adInput"
          placeholder="Ad"
          value={name}
          onChange={(val) => setName(val.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="soyadINput" className="form-label">
          Soyad:
        </label>
        <input
          type="text"
          className="form-control"
          id="soyadINput"
          placeholder="Soyad"
          value={familyName}
          onChange={(val) => setFamilyName(val.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefonInput" className="form-label">
          Telefon:
        </label>
        <input
          type="text"
          className="form-control"
          id="telefonInput"
          placeholder="Telefon"
          value={phone}
          onChange={(val) => setPhone(val.target.value)}
        />
      </div>

      <button className="btn btn-primary" type="submit" onClick={submitForm}>
        {edit ? 'Kaydet' : 'Ekle'}
      </button>
    </div>
  )
}
