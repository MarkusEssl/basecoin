import React, {setState}from 'react'
import {QueryContainer, handleCurrencyChange, CurrencySelector} from '..'
import {StyledNavbar, StyledNavList, StyledLink, StyledThemeChanger,StyledMarketData} from '../../ui/'

const Navbar = ({currency, setCurrency}) => {
  return (
    <StyledNavbar>
        <StyledNavList>
        <li><StyledLink to="/portfolio">portfolio</StyledLink></li>
        <li><StyledLink to="/">home</StyledLink></li>
        <QueryContainer />
        <CurrencySelector                 
            currency={currency}
            handleCurrencyChange={handleCurrencyChange}
            setCurrency={setCurrency}
        />
        <StyledThemeChanger />
        <StyledMarketData currency={currency.currency} currencySymbol={currency.currencySymbol} />
        </StyledNavList>
    </StyledNavbar>
  )
}

export default Navbar