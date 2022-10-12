import React, {useState} from "react";
import { StyledQueryContainer,StyledLoadingList, StyledForm } from "../../ui";
import axios from "axios";
import {QueryList} from '../QueryList/QueryList'


const QueryContainer = (props) => {

    const [settings, setSettings] = useState({isLoading:false, value:'', list:[]})
    const handleChange = ({ target: { value } }) => {
        let timer 
        clearTimeout(timer)
        if (!value){
            timer = setTimeout(() => setSettings(prevSettings => ({...prevSettings,list: []})), 1200)
          };
          value && getUser(value)
        }
   
    const handleSubmit = (e) => {
        e.preventDefault();
      };
   
    const getUser = async (searchTerm) => {
        try {

        setSettings(prevSettings => ({...prevSettings,isLoading: true}))

        const {data} = await axios(
            `https://crypto-app-server.herokuapp.com/coins/${searchTerm}`)

        setSettings(prevSettings => ({...prevSettings,
            isLoading: false,
            list: data.map(({ name, id }) => {
                return { name, id }})}))

        } catch (error) {
            console.log(error)
        }}
    console.log(settings)
   return (
    <StyledQueryContainer>
    <StyledForm onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type={"search"}
        placeholder="Search..."
      />
    </StyledForm>
    {settings.isLoading ? (
           <StyledLoadingList>Loading list...</StyledLoadingList>
         ) : (
           <QueryList list={settings.list} />
         )}
  </StyledQueryContainer>
   );
 };


 export default QueryContainer

