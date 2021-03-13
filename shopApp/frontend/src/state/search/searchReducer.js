import * as types from './searchConstants'

const initialState = {
    searchResult: ""
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FIND_TRACK:
            return {
                ...state,
                searchResult: action.payload
            }
        default:
            return state
    }
}

export default searchReducer
