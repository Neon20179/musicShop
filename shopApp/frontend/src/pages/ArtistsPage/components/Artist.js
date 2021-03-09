import React from 'react'
import PropTypes from 'prop-types'

const selectedArtistStyles = {
    boxShadow: "var(--blue) 0px 2px 1px, #9999 0px 4px 4px, var(--blue) 0px 8px 4px, #9999 0px 12px 12px, var(--blue) 0px 16px 12px"
}

const Artist = ({ artistData, selectArtistOnClick, activeArtistId }) => {
    return (
        <div className="single-artist" onClick={selectArtistOnClick}>
            <div className="artist-image">
                <img src={artistData.image} style={activeArtistId === artistData.id ? selectedArtistStyles : null} />
            </div>
            <h4>{artistData.name}</h4>
        </div>
    )
}

Artist.propTypes = {
    artistData: PropTypes.object.isRequired,
    selectArtistOnClick: PropTypes.func.isRequired
}

export default Artist