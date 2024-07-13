import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Cards } from '../components/cards_parent.jsx'
import { Card_child } from '../components/cards_child.jsx'
import { SearchBar } from '../components/search_bar.jsx'
import { Utama } from '../components/utama.jsx'
// import { AppRouter } from '../routes/route.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <App />
  {/* <Cards />}
  //   {<Card_child /> */}
  {/* <Utama /> */}
  {/* <AppRouter /> */}
    <SearchBar />
  </>
  // </React.StrictMode>,
)
