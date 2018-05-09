import { createSelector } from 'reselect'

const getUser = state => state.currentUser

export const getCurrentUser = createSelector (
    [getUser],
    (currentUser) => {
        return currentUser;
    }
)