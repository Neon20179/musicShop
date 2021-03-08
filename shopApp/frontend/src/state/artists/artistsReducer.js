import * as types from './artistsConstants'

const initialState = {
    artists: [],
    selectedArtist: {}
}

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_ARTISTS:
            return {
                ...state,
                artists: action.payload
            }
        case types.SELECT_ARTIST:
            return {
                ...state,
                selectedArtist: action.artist
            }
        default:
            return state
    }
}

export default artistsReducer
