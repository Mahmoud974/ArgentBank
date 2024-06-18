
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { Provider } from 'react-redux'
// import { store } from './store/store.tsx'
// import Home from "/Users/manuscrit974gmail.com/Desktop/ArgentBank/Frontend/src/pages/Home.tsx"
// // import { router } from './router.tsx'
// // import { RouterProvider } from 'react-router-dom'
// ReactDOM.createRoot(document.getElementById('root')!).render(
// <Provider store={store}>
//     <Home/>
//   </Provider>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
<RouterProvider router={router} />
  </React.StrictMode>,
)
