import * as types from './trackListConstants'

const initialState = {
    trackQueue: [],
    track: {},
    trackIndex: NaN
}

const trackListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_TRACK_QUEUE:
            return {
                ...state,
                trackQueue: action.tracks
            }
        case types.SEND_TRACK_INDEX:
            return {
                ...state,
                track: state.trackQueue[action.trackIndex],
                trackIndex: action.trackIndex
            }
        default:
            return state
    }
}

export default trackListReducer
