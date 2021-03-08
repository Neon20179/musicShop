import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const selectedArtistImageStyles = (artistImage) => ({
    backgroundImage: `url(${artistImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
})

const selectedArtistLinkStyles = {
    pointerEvents: "all",
    background: "var(--blue)"
}

const ArtistInfo = ({ artistData }) => {
    return (
        <section className="artists__artist-info">
            <div className="artist-short-info">
                <h3>{artistData.name ? artistData.name : <span className="default-name"></span>}</h3>
                <p>{artistData.bio ? artistData.bio : <span className="default-bio"></span>}</p>
                <Link to={`/author/${artistData.url}`} style={artistData.url ? selectedArtistLinkStyles : null}>
                    Visit artist profile
                </Link>
            </div>
            <div className="artist-image" style={artistData.image ? selectedArtistImageStyles(artistData.image) : null} />
        </section>
    )
}

ArtistInfo.propTypes = {
    artistData: PropTypes.object
}

export default ArtistInfo
