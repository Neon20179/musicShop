import * as types from './trackConstants'

const initialState = {
    track: {},
    rating: NaN
}

const trackPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TRACK_DATA:
            return {
                ...state,
                track: action.payload
            }
        case types.RATE_TRACK:
            return {
                ...state,
                rating: action.payload
            }
        default:
            return state
    }
}

export default trackPageReducer
