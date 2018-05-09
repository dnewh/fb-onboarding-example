import {
    ADD_USER,
    DELETE_USER,
} from '../constants/ActionTypes'

const initialState = [
    {
        currentUser: null
    }
]

export default function user(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {
                    currentUser: action.user
                }
            ]
        case DELETE_USER:
            return [
                ...state,
                {
                    currentUser: null
                }
            ]
        default:
            return state;
    }
}