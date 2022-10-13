import React from 'react'
import {StyledSearchList,StyledQueryList} from '../../ui'

function QueryList(props){

    if (props.list.length > 0){
        return(
            <StyledQueryList>
                {props.list.map(({name, id}) => (
                    <li key={id}>{name}</li>
                ))}
            </StyledQueryList>
        )
    } else {
        return ("null")
    }
}

export {QueryList}