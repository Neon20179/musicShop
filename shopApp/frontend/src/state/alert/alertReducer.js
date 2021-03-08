import * as types from './alertConstants'

const initialState = {
    regularAlertInfo: {}
}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_REGULAR_ALERT:
            return {
                ...state,
                regularAlertInfo: action.alertInfo
            }
        default:
            return state
    }
}

export default alertReducer
