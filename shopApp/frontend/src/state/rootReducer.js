import { combineReducers } from 'redux'
import trackListReducer from './trackList/trackListReducer'
import discoverReducer from './discover/discoverReducer'
import artistsReducer from './artists/artistsReducer'
import authorReducer from './author/authorReducer'
import trackPageReducer from './trackPage/trackReducer'
import alertReducer from './alert/alertReducer'
import cartReducer from './cart/cartReducer'
import searchReducer from './search/searchReducer'

const rootReducer = combineReducers({
    trackListReducer,
    discoverReducer,
    artistsReducer,
    authorReducer,
    trackPageReducer,
    alertReducer,
    cartReducer,
    searchReducer
})

export default rootReducer
