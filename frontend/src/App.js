import React from 'react'
import Pages from './components/mainpages/Pages'
import { Header } from './components/header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import './input.css';
import { ProductApi } from './api/ProductApi'
import { DataProvider } from './GlobalState'
const App = () => {
  return (
    <DataProvider>
    <Router>
      <div className='App'>
        <Header/>
        <Pages/>
      </div>
    </Router>
    </DataProvider>
  )
}

export default App