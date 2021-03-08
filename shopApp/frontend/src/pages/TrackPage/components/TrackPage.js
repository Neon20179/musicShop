import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Rating from '../../../common/components/Rating'

const TrackPage = ({ track, addTrackOnClick }) => {
    return (
        <section className="single-track-page" style={track.image ? { backgroundImage: `url(${track.image})` } : null}>
            <div className="mask">
                <div className="container">
                    <div className="track-image">
                        <div className="image-container">
                            <img src={track.image} />
                        </div>
                        <div className="commerce">
                            <button className="to-cart-btn" onClick={addTrackOnClick}>
                                <div className="btn-circle">
                                    <div className="btn-arrow"></div>
                                </div>
                                <span className="btn-text">Add to cart</span>
                            </button>
                            <div className="price"><span>Price:</span><span>{track.price}&#36;</span></div>
                        </div>
                    </div>
                    <div className="additional-info">
                        <div className="header">
                            <div className="track-name">
                                <h3>{track.name}</h3>
                                <span className="rating">{track.rating}<small>/5</small></span>
                            </div>
                            <div className="author">
                                <h5>{track.author?.map(author =>
                                    <span key={author.id}><Link to={`/author/${author.url}`}>{author.name}</Link></span>
                                )}</h5>
                                <Rating trackId={track.id} />
                            </div>
                        </div>
                        <div className="lyrics-container">
                            <div className="lyrics" dangerouslySetInnerHTML={{ __html: track.lyrics }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

TrackPage.propTypes = {
    track: PropTypes.object
}

export default TrackPage
