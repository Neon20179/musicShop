import { combineReducers } from 'redux'
import cartToggleReducer from './cartToggleReducer'
import * as types from './cartConstants'

const initialState = {
    addedTracks: [],
    total: 0
}

const addedTracks = (state = initialState.addedTracks, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            const trackIndexFromState = state.findIndex(track => track.id === action.track.id)
            if (trackIndexFromState !== -1) {
                const updatedTrack = state[trackIndexFromState]
                updatedTrack.quantity++
                state.splice(trackIndexFromState, 1)
                return [...state, updatedTrack]

            } else {
                const newTrack = {
                    id: action.track.id,
                    quantity: 1,
                    track: action.track
                }
                return [...state, newTrack]

            }
        case types.DELETE_FROM_CART:
            state.splice(state.findIndex(track => track.id === action.track.id), 1)
            return state
        default:
            return state
    }
}

const countTotal = (state = initialState.addedTracks) => {
    let total = 0
    for (let idx = 0; idx < state.length; idx++) {
        total += state[idx].quantity * state[idx].track.price
    }
    return total.toFixed(2)
}

const cartActionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHECKOUT_REQUEST:
            return initialState
        default:
            return {
                addedTracks: addedTracks(state.addedTracks, action),
                total: countTotal(state.addedTracks)
            }
    }
}

export default combineReducers({ cartActionReducer, cartToggleReducer })
