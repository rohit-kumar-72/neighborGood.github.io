import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


const store = configureStore({
  reducer: rootReducer
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  </BrowserRouter>
)
