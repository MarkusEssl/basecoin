import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {CoinRoute, PortfolioRoute, Navbar} from './'
import { StyledContainer, GlobalStyle} from '../ui/index'
import styled, {createGlobalStyle} from "styled-components";
import { NavLink } from "react-router-dom";

function App() {

  const savedCurency = JSON.parse(localStorage.getItem("currencyinfo"))
  const [currency, setCurrency] = useState(savedCurency ? savedCurency : {currency: "USD",currencySymbol: "$"})

  return (
    <StyledContainer>
      <GlobalStyle />
      <Navbar currency={currency} setCurrency={setCurrency}/>
      <Routes>
        <Route exact path='/' element={<CoinRoute />} />
        <Route path='/portfolio' element={<PortfolioRoute />} />
      </Routes>
    </StyledContainer>
  )
}

export default App;
