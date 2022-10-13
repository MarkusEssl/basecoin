import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {CoinRoute, PortfolioRoute, QueryContainer, handleCurrencyChange, CurrencySelector} from './'
import { StyledContainer, StyledNavbar, StyledNavList,StyledLink, GlobalStyle, StyledThemeChanger} from '../ui/index'
import styled, {createGlobalStyle} from "styled-components";
import { NavLink } from "react-router-dom";

function App() {

  const savedCurency = JSON.parse(localStorage.getItem("currencyinfo"))
  console.log(savedCurency)
  const [currency, setCurrency] = useState(savedCurency ? savedCurency : {currency: "USD",currencySymbol: "$"})
  console.log(currency)

  // Json.parse created object based on string
  // localStorage.setItem("currencyinfo", "foo")
  

  return (
    <StyledContainer>
      <GlobalStyle />
      <StyledNavbar>
        <StyledNavList>
        <li><StyledLink to="/portfolio">portfolio</StyledLink></li>
        <li><StyledLink to="/">home</StyledLink></li>
        <QueryContainer />
        <CurrencySelector                 
            currency={currency}
            handleCurrencyChange={handleCurrencyChange}
            setState={setCurrency}
        />
        </StyledNavList>
        </StyledNavbar>
      <Routes>
        <Route exact path='/' element={<CoinRoute />} />
        <Route path='/portfolio' element={<PortfolioRoute />} />
      </Routes>
    </StyledContainer>
  )
}

export default App;
