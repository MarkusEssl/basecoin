import React from "react";
import { StyledCurrencySelector } from "../../ui";

const handleCurrencyChange = (value, setState) => {
    console.log(value)
    console.log(setState.setState)
    switch (value.target.value) {
      case "USD":
        setState.setState({ currency: value.target.value, currencySymbol: "$" });
        break;
      case "GBP":
        setState.setState({ currency: value.target.value, currencySymbol: "£" });
        break;
      case "EUR":
        setState.setState({ currency: value.target.value, currencySymbol: "€" });
        break;
      case "BTC":
        setState.setState({ currency: value.target.value, currencySymbol: "₿" });
        break;
      case "ETH":
        setState.setState({ currency: value.target.value, currencySymbol: "Ξ" });
        break;
    }
  };
 const CurrencySelector = (props) => {
   const { className, handleCurrencyChange, currencySymbol, setState } = props;
   console.log(setState)
   return (
     <StyledCurrencySelector className={className}>
       <div>{currencySymbol}</div>
       <div>
         <select onChange={event => handleCurrencyChange(event, {setState})}>
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