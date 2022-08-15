import React, { useState } from 'react'
import { selectAllData, removeUser } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
  onEdit: (index: number) => void
}
export const DataTable: React.FC<Props> = ({ onEdit }) => {
  const [sort, setSort] = useState('A-Z')
  const users: MyData[] = useSelector(selectAllData)
  const dispatch = useDispatch()

  const edit = (id: number) => {
    onEdit(id)
  }

  const deleteRow = (id: number) => {
    dispatch(removeUser(id))
  }

  const TableBody = () => {
    let data: MyData[] = [...users]
    return data
      .sort((a, b) => {
        if (sort === 'A-Z') {
          return a.name > b.name ? 1 : -1
        } else {
          return a.name < b.name ? 1 : -1
        }
      })
      .map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.familyName}</td>
            <td>{item.phone}</td>
            <td>
              <button onClick={() => edit(item.id)} className="btn btn-warning text-white ">
                düzenle
              </button>
              &nbsp;
              <button onClick={() => deleteRow(item.id)} className="btn btn-danger text-white ">
                sil
              </button>
            </td>
          </tr>
        )
      })
  }

  return (
    <div className="col border px-3 py-3 my-3">
      <div className="row">
        <div className="col">Arama</div>
        <select
          id="sortInput"
          className="col form-control"
          placeholder="Sırala"
          onChange={(e) => setSort(e.target.value)}
          value={sort}
        >
          <option disabled>Sırala</option>
          <option value="A-Z">A-Z </option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Ad</th>
            <th scope="col">Soyad</th>
            <th scope="col">Telefon</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{TableBody()}</tbody>
      </table>
    </div>
  )
}
