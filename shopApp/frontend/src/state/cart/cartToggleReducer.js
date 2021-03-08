const CART_TAB_TOGGLE = "PROP / CART_TAB_TOGGLE"
const CHECKOUT_TOGGLE = "PROP / CHECKOUT_TOGGLE"

export const cartTabToggle = () => ({
    type: CART_TAB_TOGGLE
})

export const checkoutToggle = () => ({
    type: CHECKOUT_TOGGLE
})

const initialState = {
    isCartTabOpen: false,
    isCheckout: false
}

const cartToggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_TAB_TOGGLE:
            return {
                ...state,
                isCartTabOpen: !state.isCartTabOpen
            }
        case CHECKOUT_TOGGLE:
            return {
                ...state,
                isCheckout: !state.isCheckout
            }
        default:
            return state
    }
}

export default cartToggleReducer
