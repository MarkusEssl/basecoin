import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {CoinRoute, PortfolioRoute} from './'
import { StyledContainer, StyledNavbar, StyledNavList,StyledLink, GlobalStyle} from '../ui/index'
import styled, {createGlobalStyle} from "styled-components";
import { NavLink } from "react-router-dom";

function App() {

  return (
    <StyledContainer>
      <GlobalStyle />
      <StyledNavbar>
        <StyledNavList><StyledLink to="/portfolio">portfolio</StyledLink></StyledNavList>
        <StyledNavList><StyledLink to="/">home</StyledLink></StyledNavList>
        </StyledNavbar>
      <Routes>
        <Route exact path='/' element={<CoinRoute />} />
        <Route path='/portfolio' element={<PortfolioRoute />} />
      </Routes>
    </StyledContainer>
  )
}

export default App;
