import React from 'react'
import PropTypes from 'prop-types'

const selectedTrackStyles = {
    color: "#a4c7ee",
    boxShadow: "0 1px 10px #a4c7ee"
}

const SingleTrack = ({ track, activeTrackId, selectTrackOnClick }) => {
    return (
        <div className="track-container"
            style={activeTrackId === track.id ? selectedTrackStyles : null}
            key={track.id}
            onClick={selectTrackOnClick}>
            <img src={track.image} />
            <h4>{track.name}</h4>
        </div>
    )
}

SingleTrack.propTypes = {
    track: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        track: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
    selectTrackOnClick: PropTypes.func.isRequired
}

export default SingleTrack
