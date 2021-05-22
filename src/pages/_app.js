import React from 'react'
import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from '../reducers'

import '../styles/tailwind.css'


const store = createStore(
    reducers,//todo los reducers
    {}, //estado inicial
    applyMiddleware(reduxThunk) //Middleware
)

const App = ({ Component, pageProps }) => {
    
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default App
