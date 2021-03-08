import axios from 'axios'
import { showRegularAlert } from '../alert/alertActions'
import { getCookie } from '../../utils/actionsUtils'
import * as types from './trackConstants'

export const getTrackData = pk => dispatch => {
    axios.get(`/api/track/${pk}/`)
        .then(res => {
            dispatch({
                type: types.GET_TRACK_DATA,
                payload: res.data
            })
        })
        .catch(err => console.warn(err))
}

export const rateTrack = ratingObj => dispatch => {
    const csrfToken = getCookie("csrftoken")
    axios({
        method: "post",
        url: "/api/rate_track/",
        data: ratingObj,
        headers: { "X-CSRFToken": csrfToken }
    })
        .then(res => {
            dispatch({
                type: types.RATE_TRACK,
                payload: res.data
            })
            dispatch(
                showRegularAlert({
                    type: "OK",
                    title: "You have successfully rate a track"
                })
            )
        })
        .catch(err =>
            dispatch(
                showRegularAlert({
                    type: "ERROR",
                    title: "Seems like you are already rate this track",
                    message: `Error: ${err}`
                })
            )
        )
}