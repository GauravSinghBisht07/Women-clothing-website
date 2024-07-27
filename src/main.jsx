import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Store } from './EcommStore/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import ProducMain from './Components/ProductPage/ProducMain.jsx'
import Home from './Components/Home/Home.jsx'
import ProdDetail from './Components/ProductPage/ProdDetail.jsx'
import CartProdDetail from './Components/CartProdDetail/CartProdDetail.jsx'
import Contact from './Components/Contact/Contact.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children : [
      {
       path:"",
       element:<Home/>
      },
      {
        path : 'ProducMain',
        element : <ProducMain/>
      },
      {
        path : "ProdDetail",
        element : <ProdDetail/>
      },
      {
        path : "CartProdDetail",
        element : <CartProdDetail/>
      },
       {
        path : "Contact",
        element : <Contact/>
       }
    ]
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
   <RouterProvider router={router}>
      <App /> 
   </RouterProvider>
   </Provider>
)
