import * as types from '../constants/ActionTypes'

export const addUser = user => ({ type: types.ADD_USER, user })
export const deleteUser = () => ({ type: types.DELETE_USER })