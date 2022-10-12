import React from "react";
import { StyledQueryContainer,StyledForm } from "../../ui";
import axios from "axios";

const QueryContainer = (props) => {


    const handleChange = ({ target: { value } }) => {
        getUser(value);
      };
   
    const handleSubmit = (e) => {
        e.preventDefault();
      };
   
    const getUser = async (searchTerm) => {
        try {
          const response = await axios(
            `https://crypto-app-server.herokuapp.com/coins/${searchTerm}`
          );
          console.log(response);
        } catch (error) {
          console.error(error);
        }}

   return (
    <StyledQueryContainer>
    <StyledForm onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type={"search"}
        placeholder="Search..."
      />
    </StyledForm>
  </StyledQueryContainer>
   );
 };


 export default QueryContainer

