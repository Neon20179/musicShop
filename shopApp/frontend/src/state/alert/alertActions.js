import * as types from './alertConstants'

export const showRegularAlert = (alertInfo) => ({
    type: types.SHOW_REGULAR_ALERT,
    alertInfo
})