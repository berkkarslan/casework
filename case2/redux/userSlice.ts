import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { HYDRATE } from 'next-redux-wrapper'

const initialState: IStoreState = {
  data: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addNewUser(state, action) {
      state.data.push({ ...action.payload, id: state.data.length + 1 })
    },
    removeUser(state, action) {
      state.data = state.data.filter((user) => user.id !== action.payload)
    },
    updateUser(state, action) {
      state.data = state.data.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload
        }
        return user
      })
    }
  }
})

export const { addNewUser, removeUser, updateUser } = userSlice.actions

export const selectAllData = (state: AppState) => state.user.data

export default userSlice.reducer
