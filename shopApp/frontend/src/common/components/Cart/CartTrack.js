import React from 'react'
import PropTypes from 'prop-types'

const CartTrack = ({ trackData, deleteTrackOnClick }) => {
    return (
        <tr className="cart-track">
            <td><h4>{trackData.track.name}</h4></td>
            <td className="cart-quantity"><span>{trackData.quantity}</span></td>
            <td className="cart-price"><span>{trackData.track.price}&#36;</span></td>
            <td className="delete-btn"><button onClick={deleteTrackOnClick}>&#x2715;</button></td>
        </tr>
    )
}

CartTrack.propTypes = {
    trackData: PropTypes.object.isRequired,
    deleteTrackOnClick: PropTypes.func.isRequired
}

export default CartTrack
