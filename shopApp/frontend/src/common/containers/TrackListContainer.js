import React from 'react'
import { connect } from 'react-redux'
import TrackList from '../components/TrackList/TrackList'
import SingleTrack from '../components/TrackList/SingleTrack'
import { sendTrackIndex, sendTrackQueue } from '../../state/trackList/trackListActions'

const TrackListContainer = ({ tracks = [], activeTrackId, sendTrackIndex, sendTrackQueue }) => {

    const selectTrack = (trackId) => {
        const trackIndex = tracks.findIndex(track => track.id === trackId)
        sendTrackQueue(tracks)
        sendTrackIndex(trackIndex)
    }

    return (
        <TrackList isShowTracks={tracks.length > 0}>
            {tracks.map(track =>
                <SingleTrack track={track} key={track.id}
                    selectTrackOnClick={() => selectTrack(track.id)}
                    activeTrackId={activeTrackId}
                />
            )}
        </TrackList>
    )
}

const mapStateToProps = state => ({
    activeTrackId: state.trackListReducer.track.id
})

export default connect(mapStateToProps, { sendTrackIndex, sendTrackQueue })(TrackListContainer)
