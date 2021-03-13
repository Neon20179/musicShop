import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTrackData } from '../../state/trackPage/trackActions'
import { addTrackToCart } from '../../state/cart/cartActions'
import { getUrlPk } from '../../utils/dynamicPagesUtils'
import TrackPage from './components/TrackPage'

const TrackPageContainer = ({ track, getTrackData, addTrackToCart, match }) => {
    useEffect(() => {
        getTrackData(getUrlPk(match))
    }, [match])

    return (
        <TrackPage track={track} addTrackOnClick={() => addTrackToCart(track)} />
    )
}

TrackPageContainer.propTypes = {
    track: PropTypes.object.isRequired,
    getTrackData: PropTypes.func.isRequired,
    addTrackToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    track: state.trackPageReducer.track
})

export default connect(mapStateToProps, { getTrackData, addTrackToCart })(TrackPageContainer)
