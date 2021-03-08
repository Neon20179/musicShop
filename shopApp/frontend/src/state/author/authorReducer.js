import * as types from './authorConstants'

const initialState = {
    authorData: {},
    albumTracks: [],
    albumId: NaN
}

const authorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_AUTHOR_DATA:
            return {
                ...state,
                authorData: action.payload
            }
        case types.SELECT_ALBUM:
            return {
                ...state,
                albumTracks: action.tracks,
                albumId: action.albumId
            }
        default:
            return state
    }
}

export default authorReducer
