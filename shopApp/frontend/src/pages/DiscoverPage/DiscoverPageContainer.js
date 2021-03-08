import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getAllTagsData, sendTag } from '../../state/discover/discoverActions'
import Tag from './components/Tag'
import TagInfo from './components/TagInfo'


const DiscoverPageContainer = ({ tags, activeTag, getAllTagsData, sendTag }) => {
    useEffect(() => {
        getAllTagsData()
    }, [])

    return (
        <section className="discover-section">
            <TagInfo tag={activeTag} />
            <section className="discover__tags-section">
                <div className="container">
                    {tags.map(tag =>
                        <Tag key={tag.id} tag={tag} activeTagId={activeTag.id} sendTrackOnClick={() => sendTag(tag)} />
                    )}
                </div>
            </section>
        </section>
    )
}

DiscoverPageContainer.propTypes = {
    tags: PropTypes.array.isRequired,
    activeTag: PropTypes.object,
    getAllTagsData: PropTypes.func.isRequired,
    sendTag: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tags: state.discoverReducer.tags,
    activeTag: state.discoverReducer.activeTag,
})

export default connect(mapStateToProps, { getAllTagsData, sendTag })(DiscoverPageContainer)
