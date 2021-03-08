import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteTrackFromCart } from '../../state/cart/cartActions'
import { checkoutToggle } from '../../state/cart/cartToggleReducer'
import Cart from '../components/Cart/Cart'
import CartTrack from '../components/Cart/CartTrack'

const CartContainer = ({ cartTracks, total, isCartTabOpen, isCheckout, deleteTrackFromCart, checkoutToggle }) => {
    return (
        <Cart isOpen={isCartTabOpen} total={total} checkoutToggle={checkoutToggle} isCheckout={isCheckout}>
            {cartTracks.map(cartTrack =>
                <CartTrack key={cartTrack.id} trackData={cartTrack}
                    deleteTrackOnClick={() => deleteTrackFromCart(cartTrack)}
                />
            )}
        </Cart>
    )
}

CartContainer.propTypes = {
    cartTracks: PropTypes.array.isRequired,
    isCartTabOpen: PropTypes.bool.isRequired,
    deleteTrackFromCart: PropTypes.func.isRequired,
    checkoutToggle: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    cartTracks: state.cartReducer.cartActionReducer.addedTracks,
    total: state.cartReducer.cartActionReducer.total,
    isCartTabOpen: state.cartReducer.cartToggleReducer.isCartTabOpen,
    isCheckout: state.cartReducer.cartToggleReducer.isCheckout
})

export default connect(mapStateToProps, { deleteTrackFromCart, checkoutToggle })(CartContainer)
