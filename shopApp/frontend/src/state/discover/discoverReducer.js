import * as types from './discoverConstants'

const initialState = {
    tags: [],
    activeTag: {}
}

const discoverReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_TAGS_DATA:
            return {
                ...state,
                tags: action.payload
            }
        case types.SEND_TAG:
            return {
                ...state,
                activeTag: action.tag
            }
        default:
            return state
    }
}

export default discoverReducer
