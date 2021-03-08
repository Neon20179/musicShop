import axios from 'axios'
import { getCookie } from '../../utils/actionsUtils'
import { showRegularAlert } from '../alert/alertActions'
import * as types from './cartConstants'

const addTrackToCartUnsafe = (track) => ({
    type: types.ADD_TO_CART,
    track
})

export const deleteTrackFromCart = (track) => ({
    type: types.DELETE_FROM_CART,
    track
})

export const addTrackToCart = (track) => dispatch => {
    if (track.quantity > 0) {
        dispatch(addTrackToCartUnsafe(track))
        dispatch(
            showRegularAlert({
                type: "OK",
                title: `You have successfully add ${track.name} to cart`
            })
        )
    } else {
        dispatch(
            showRegularAlert({
                type: "ERROR",
                title: "It looks like the tracks ran out in the store"
            })
        )
    }
}

export const checkoutRequest = (order) => dispatch => {
    const csrfToken = getCookie("csrftoken")
    axios({
        method: 'post',
        url: '/api/order/',
        data: order,
        headers: { "X-CSRFToken": csrfToken }
    })
        .then(res => {
            dispatch({
                type: types.CHECKOUT_REQUEST,
                payload: res.data
            })
            dispatch(
                showRegularAlert({
                    type: "OK",
                    title: "You have successfully placed your order",
                    message: "Please wait for confirmation"
                })
            )
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
