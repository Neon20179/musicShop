import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store'
import routes from './routes'
import './styles/app.scss'

const rootNode = document.getElementById('root')

render(
    <Provider store={store}>
        {routes}
    </Provider>,
    rootNode
)
