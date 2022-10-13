import React from "react";
import { StyledCurrencySelector } from "../../ui";

const handleCurrencyChange = (value, setCurrency) => {

    const currencies = {"USD": "$", "GBP":"£", "EUR":"€", "BTC": "₿", "ETH":"Ξ"}
    const newstate = {currency: value.target.value, currencySymbol: currencies[value.target.value]}
    setCurrency(newstate)
    localStorage.setItem("currencyinfo", JSON.stringify(newstate))
  };
 const CurrencySelector = (props) => {
   const { currency, handleCurrencyChange, setCurrency } = props;
   console.log(setCurrency)
   console.log(currency)
   return (
     <StyledCurrencySelector className={currency.currency}>
       <div>{currency.currencySymbol}</div>
       <div>
         <select value={currency.currency} onChange={event => handleCurrencyChange(event, setCurrency)}>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
         </select>
       </div>
     </StyledCurrencySelector>
   );
 };

 export {CurrencySelector,handleCurrencyChange}