import axios from 'axios'
import * as types from './artistsConstants'

export const getAllArtists = () => dispatch => {
    axios.get('/api/authors/')
        .then(res => {
            dispatch({
                type: types.GET_ALL_ARTISTS,
                payload: res.data
            })
        })
        .catch(err => console.warn(err))
}

export const selectArtist = (artist) => ({
    type: types.SELECT_ARTIST,
    artist
})
