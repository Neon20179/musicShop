import React from 'react'
import PropTypes from 'prop-types'

const Tracks = ({ children, isShowTracks }) => {
    return (
        <div className="tracks-list-component">
            <div className="tracks-list">
                {isShowTracks ? children :
                    (
                        <div className="default-tracks">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )}
            </div>
        </div>
    )
}

Tracks.propTypes = {
    isShowTracks: PropTypes.bool.isRequired,
}

export default Tracks
