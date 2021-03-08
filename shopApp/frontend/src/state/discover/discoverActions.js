import axios from 'axios'
import * as types from './discoverConstants'

export const getAllTagsData = () => dispatch => {
    axios.get('/api/tags/')
        .then(res => {
            dispatch({
                type: types.GET_ALL_TAGS_DATA,
                payload: res.data
            })
        })
        .catch(err => console.warn(err))
}

export const sendTag = tag => ({
    type: types.SEND_TAG,
    tag
})
