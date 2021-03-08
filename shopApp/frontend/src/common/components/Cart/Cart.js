import React, { useEffect, useRef, Fragment } from 'react'
import CheckoutContainer from '../../containers/CheckoutContainer'

const Cart = ({ children, total, isOpen, isCheckout, checkoutToggle }) => {
    let cartNode = useRef(null)

    useEffect(() => {
        cartNode.style.right = isOpen ? 0 : "-700px"
    }, [isOpen])

    return (
        <div className="cart" ref={el => { cartNode = el }}>
            {isCheckout ?
                <CheckoutContainer /> :
                (<Fragment>
                    <h2>Cart</h2>
                    {children.length > 0 ?
                        (
                            <Fragment>
                                <table className="cart-tracks-table">
                                    <tbody>
                                        <tr className="cart-track">
                                            <td><h4>NAME</h4></td>
                                            <td className="cart-quantity"><span>QUANTITY</span></td>
                                            <td className="cart-price"><span>PRICE</span></td>
                                            <td className="delete-btn"></td>
                                        </tr>
                                        {children}
                                    </tbody>
                                </table>
                                <div className="cart-info">
                                    <h4 className="total-price"><span>Total:</span><span>{total}&#36;</span></h4>
                                    <button onClick={checkoutToggle}>Checkout</button>
                                </div>
                            </Fragment>
                        )
                        : <h3>Add something to cart</h3>}
                </Fragment>)
            }
        </div>
    )
}

export default Cart
