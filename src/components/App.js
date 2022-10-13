import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {CoinRoute, PortfolioRoute, QueryContainer, handleCurrencyChange, CurrencySelector} from './'
import { StyledContainer, StyledNavbar, StyledNavList,StyledLink, GlobalStyle, StyledThemeChanger} from '../ui/index'
import styled, {createGlobalStyle} from "styled-components";
import { NavLink } from "react-router-dom";

function App() {

  const [currency, setCurrency] = useState({currency: "USD",currencySymbol: "$"})
  
  return (
    <StyledContainer>
      <GlobalStyle />
      <StyledNavbar>
        <StyledNavList>
        <li><StyledLink to="/portfolio">portfolio</StyledLink></li>
        <li><StyledLink to="/">home</StyledLink></li>
        <QueryContainer />
        <CurrencySelector                 
            currency={currency.currency}
            currencySymbol={currency.currencySymbol}
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
