import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAuthorData, selectAlbum } from '../../state/author/authorActions'
import Albums from './components/Albums'
import Album from './components/Album'
import Author from './components/Author'
import { getUrlPk } from '../../utils/dynamicPagesUtils'

const AuthorPageContainer = (
    { authorData, activeTrack, albumId, albumTracks, selectAlbum, getAuthorData, match }) => {
    useEffect(() => {
        getAuthorData(getUrlPk(match))
    }, [])

    const isAuthorTrackPlaying = (authorId, activeTrackAuthors) => {
        if (!activeTrackAuthors) return false
        if (activeTrackAuthors.find(author => author.id === authorId)) return true
        return false
    }

    return (
        <Author authorData={authorData} activeTrackImage={activeTrack.image}
            isAuthorTrackPlaying={isAuthorTrackPlaying(authorData.id, activeTrack.author)}
        >
            <Albums authorName={authorData.name}
                tracksData={albumTracks}>
                {authorData.author_albums?.map(album =>
                    <Album key={album.id} album={album}
                        selectAlbumOnClick={() => selectAlbum(album.album_tracks, album.id)}
                        activeAlbumId={albumId}
                    />
                )}
            </Albums>
        </Author>
    )
}

AuthorPageContainer.propTypes = {
    authorData: PropTypes.object.isRequired,
    albumTracks: PropTypes.array,
    albumId: PropTypes.number,
    activeTrack: PropTypes.object
}

const mapStateToProps = (state) => ({
    authorData: state.authorReducer.authorData,
    albumTracks: state.authorReducer.albumTracks,
    albumId: state.authorReducer.albumId,
    activeTrack: state.trackListReducer.track
})

export default connect(mapStateToProps, { getAuthorData, selectAlbum })(AuthorPageContainer)
