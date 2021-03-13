import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const TrackResult = ({ track }) => {
    return (
        <Link to={`/track/${track.id}`} className="track" key={track.id}>
            <img src={track.image} />
            <h4>{track.name}</h4>
        </Link>
    )
}

TrackResult.propTypes = {
    track: PropTypes.object.isRequired
}

export default TrackResult
