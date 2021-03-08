import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllArtists, selectArtist } from '../../state/artists/artistsActions'
import ArtistInfo from './components/ArtistInfo'
import Artist from './components/Artist'

const ArtistsPageContainer = ({ artists, selectedArtist, getAllArtists, selectArtist }) => {
    useEffect(() => {
        getAllArtists()
    }, [])

    return (

        <section className="artists-section">
            <ArtistInfo artistData={selectedArtist} />
            <section className="artists_list-section">
                <div className="container">
                    {artists.map(artist =>
                        <Artist key={artist.id} artistData={artist}
                            activeArtistId={selectedArtist.id}
                            selectArtistOnClick={() => selectArtist(artist)}
                        />
                    )}
                </div>
            </section>
        </section>
    )
}

ArtistsPageContainer.propTypes = {
    artists: PropTypes.array.isRequired,
    selectedArtist: PropTypes.object,
    getAllArtists: PropTypes.func.isRequired,
    selectArtist: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    artists: state.artistsReducer.artists,
    selectedArtist: state.artistsReducer.selectedArtist
})

export default connect(mapStateToProps, { getAllArtists, selectArtist })(ArtistsPageContainer)
