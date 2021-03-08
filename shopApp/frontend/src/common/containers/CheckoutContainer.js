import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { checkoutToggle } from '../../state/cart/cartToggleReducer'
import { checkoutRequest } from '../../state/cart/cartActions'
import { cartTabToggle } from '../../state/cart/cartToggleReducer'
import Checkout from '../components/Checkout/Checkout'

const CheckoutContainer = ({ total, cartTracks, checkoutToggle, checkoutRequest, cartTabToggle }) => {
    return (
        <Checkout total={total} cartTracks={cartTracks} checkoutToggle={checkoutToggle} checkoutRequest={checkoutRequest} cartTabToggle={cartTabToggle} />
    )
}

const mapStateToProps = state => ({
    cartTracks: state.cartReducer.cartActionReducer.addedTracks,
    total: state.cartReducer.cartActionReducer.total
})

export default connect(mapStateToProps, { checkoutToggle, checkoutRequest, cartTabToggle })(CheckoutContainer)
