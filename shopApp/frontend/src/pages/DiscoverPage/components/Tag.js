import React from 'react'
import PropTypes from 'prop-types'

const selectedTagStyles = {
    boxShadow: "var(--blue) 0px 2px 1px, #9999 0px 4px 4px, var(--blue) 0px 8px 4px, #9999 0px 12px 12px, var(--blue) 0px 16px 12px"
}

const Tag = ({ tag, activeTagId, sendTrackOnClick }) => {
    return (
        <div className="single-tag" key={tag.id}
            onClick={sendTrackOnClick}>
            <div className="tag-image">
                <img src={tag.image} style={activeTagId === tag.id ? selectedTagStyles : null} />
            </div>
            <h4>{tag.name}</h4>
        </div>
    )
}

Tag.propTypes = {
    tag: PropTypes.object.isRequired,
    activeTag: PropTypes.object,
    sendTrackOnClick: PropTypes.func.isRequired
}

export default Tag
