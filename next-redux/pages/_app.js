import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'

const MyApp = ({ Component, pageProps }) => {

  // const {store} = store()
  console.log(store, '****')
  return <Provider store={store}>
    <Component {...pageProps}></Component>
  </Provider>
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)