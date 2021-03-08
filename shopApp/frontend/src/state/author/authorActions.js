import axios from 'axios'
import * as types from './authorConstants'

export const getAuthorData = url => dispatch => {
    axios.get(`/api/authors/${url}/`)
        .then(res => {
            dispatch({
                type: types.GET_AUTHOR_DATA,
                payload: res.data
            })
        })
        .catch(err => console.warn(err))
}

export const selectAlbum = (tracks, albumId) => ({
    type: types.SELECT_ALBUM,
    tracks,
    albumId
})
