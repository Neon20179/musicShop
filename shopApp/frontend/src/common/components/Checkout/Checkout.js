import React, { Component } from 'react'

const initialState = {
    name: "",
    email: ""
}

class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const orderItems = this.props.cartTracks.map(cartTrack => (
            {
                "quantity": cartTrack.quantity,
                "track": cartTrack.track.id
            }
        ))
        const order = {
            name: this.state.name,
            email: this.state.email,
            total: +this.props.total,
            order_items: orderItems
        }
        this.props.checkoutRequest(order)
        this.props.cartTabToggle()
        this.props.checkoutToggle()
        this.setState(initialState)
    }

    render() {
        return (
            <div className="checkout">
                <h2>Checkout</h2>
                <button onClick={this.props.checkoutToggle} className="close-btn">&#x2715;</button>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" autoComplete="off" required className="name-input" name="name" onChange={this.handleChange} />
                    <input type="text" placeholder="email@gmail.com" autoComplete="off" required className="email-input" name="email" onChange={this.handleChange} />
                    <h4 className="total-price"><span>Total:</span><span>{this.props.total}&#36;</span></h4>
                    <button className="submit-btn" type="submit">
                        <div className="btn-circle">
                            <div className="btn-arrow"></div>
                        </div>
                        <span className="btn-text">Submit</span>
                    </button>
                </form>
            </div>
        )
    }
}

export default Checkout
