// import "babel-polyfill" // 如果需要支持ie 9+，请解注此行即可。
import dva from 'dva'
import { browserHistory } from 'dva/router'
import createLoading from 'dva-loading'

import App from './models/app'
import Modal from './models/modal'
import Router from './router'

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError (error) {
    console.error('app onError -- ', error)
  },
})

// 2. Plugins
app.use(createLoading({ effects: true }))

// 3. Model
app.model(App)
app.model(Modal)

// 4. Router for browserHistory dynamic load
app.router(Router)

// 5. Start
app.start('#root')
