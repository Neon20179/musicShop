import React from 'react'
import PropTypes from 'prop-types'

const Author = ({ authorData, isAuthorTrackPlaying, activeTrackImage, children }) => {
    return (

        <section className="author-page-section">
            <div className="author-container"
                style={authorData.image ? {
                    backgroundImage: `url(${isAuthorTrackPlaying ? activeTrackImage : authorData.image})`
                } : null}
            >
                <h2 className="author-name">{authorData.name}</h2>
                <div className="img-author-icon">
                    <img src={isAuthorTrackPlaying ? authorData.image : null} />
                </div>
                <div className="author-bio">
                    <p>{authorData.bio}</p>
                </div>
            </div>
            {children}
        </section>
    )
}

Author.propTypes = {
    authorData: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        bio: PropTypes.string,
        url: PropTypes.string,
        image: PropTypes.string,
        author_albums: PropTypes.array
    }).isRequired,
    track: PropTypes.object
}

export default Author
