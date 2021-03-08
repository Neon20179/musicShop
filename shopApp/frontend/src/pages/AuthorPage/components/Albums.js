import React from 'react'
import PropTypes from 'prop-types'
import TrackListContainer from '../../../common/containers/TrackListContainer'

const Albums = ({ authorName, tracksData, children }) => {
    return (
        <div className="author-albums">
            <div className="albums-container">
                <div className="header">
                    <h2>{authorName}'s albums</h2>
                </div>
                <div className="albums-list">
                    <div className="albums">
                        {children}
                    </div>
                </div>
            </div>
            {tracksData ? <TrackListContainer tracks={tracksData} /> : <h3>Chose album</h3>}
        </div>
    )
}

Albums.propTypes = {
    tracksData: PropTypes.array,
    authorName: PropTypes.string,
}

export default Albums
