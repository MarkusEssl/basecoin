import React from "react";
import { StyledQueryContainer } from "../../ui";

const QueryContainer = (props) => {
   return (
     <StyledQueryContainer>
       <input type={"search"} placeholder="Search..." />
     </StyledQueryContainer>
   );
 };

 export default QueryContainer