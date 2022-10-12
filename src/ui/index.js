import styled, {createGlobalStyle} from "styled-components";
import { NavLink } from "react-router-dom";

 export const StyledContainer = styled.div`
   max-width: 1920px;
   max-height: 1848px;
   text-align: center;
   height: 100vh;
   border: 10px solid #191B1F;
   margin 0 auto;
   background:#1F2128;
 `;

 export const StyledNavbar = styled.nav`
   max-width: 1900px;
   height: 130px;
   background: #191b1f;
 `;

 export const StyledNavList = styled.ul`
   display: flex;
   align-items: center;
   width: 100%;
   height: 100%;
   background: #191b1f;
   padding-left: 95px;
   li:nth-child(1) {
     margin-right: 31px;
   }
   li:nth-child(2) {
     margin-right: auto;
   }
 `;

 export const StyledLink = styled(NavLink)`
   color: #fff;
   font-size: ${(props) => (props.children === "Coins" ? "23px" : "22px")};
   border-radius: 10px;
   padding: ${(props) =>
     props.children === "Coins" ? "12px 60px 14px 51px" : "12px 63px 15px 56px"};
   &.active {
     background: #2c2f36;
   }
 `;

 export const StyledQueryContainer = styled.div`
   display: flex;
   width: 510px;
   height: 63px;
   background: #2c2f36;
   border-radius: 10px;
   margin-right: 27px;
   align-items: center;
   padding-top: 19.5px;
   padding-bottom: 20.4px;
   padding-left: 21.4px;

   & > input {
     background: none;
     border: 0;
   }
 `;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body{
    font-family: 'Poppins', sans-serif;
    }

    ul{
    list-style-type:none;
    }

    a{
    cursor:pointer;
    text-decoration:none;
    color:currentColor;
    }
`;

