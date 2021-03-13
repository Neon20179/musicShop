import axios from 'axios'
import { showRegularAlert } from '../alert/alertActions'
import * as types from './searchConstants'

export const findTrackByName = name => dispatch => {
    axios.get(`/api/find_track/?search=${name}`)
        .then(res => {
            dispatch({
                type: types.FIND_TRACK,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
                showRegularAlert({
                    type: "ERROR",
                    title: "Something went wrong",
                    message: `Error: ${err}`
                })
            )
        })
}
