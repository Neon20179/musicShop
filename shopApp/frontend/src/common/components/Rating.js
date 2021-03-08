import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { rateTrack } from '../../state/trackPage/trackActions'

const Rating = ({ trackId, rateTrack }) => {
    const stars = []
    for (let idx = 1; idx < 6; idx++) {
        stars.push(
            <svg className="star" onClick={() => rateTrack({ rating: idx, track: trackId })} key={idx}>
                <circle cx="8" cy="8" r="6" />
            </svg>
        )
    }

    return (
        <div className="rating">
            {stars}
        </div>
    )
}

Rating.propTypes = {
    trackId: PropTypes.number,
    rateTrack: PropTypes.func.isRequired
}

export default connect(null, { rateTrack })(Rating)
