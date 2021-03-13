import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { findTrackByName } from '../../state/search/searchActions'
import Search from '../components/Search/Search'
import TrackResult from '../components/Search/TrackResult'

const SearchContainer = ({ searchResult, findTrackByName }) => {
    return (
        <Search findTrackByName={findTrackByName}>
            {searchResult.length > 0 ? (
                searchResult.map(track =>
                    <TrackResult track={track} key={track.id} />
                )
            ) : null}
        </Search>
    )
}

SearchContainer.propTypes = {
    searchResult: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    findTrackByName: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    searchResult: state.searchReducer.searchResult
})

export default connect(mapStateToProps, { findTrackByName })(SearchContainer)
