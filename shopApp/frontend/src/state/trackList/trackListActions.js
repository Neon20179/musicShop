import * as types from './trackListConstants'

export const sendTrackQueue = tracks => ({
    type: types.SEND_TRACK_QUEUE,
    tracks
})

export const sendTrackIndex = trackIndex => ({
    type: types.SEND_TRACK_INDEX,
    trackIndex
})
