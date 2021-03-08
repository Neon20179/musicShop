import React from 'react'
import TrackListContainer from '../../../common/containers/TrackListContainer'

const selectedTrackInfoStyles = image => ({
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
})

const TagInfo = ({ tag }) => {
    return (
        <section className="discover__tag-info">
            <div className="tracks">
                <h3>{tag.name ? `${tag.name} tracks` : "Select tag"}</h3>
                <TrackListContainer tracks={tag.tracks} />
            </div>
            <div className="selected-track-info"
                style={tag.image ? selectedTrackInfoStyles(tag.image) : null} />
        </section>
    )
}

export default TagInfo
