import React from 'react'
import {StyledSearchList,StyledQueryList} from '../../ui'

function QueryList(props){

    if (props.list.length > 0){
        return(
            <StyledQueryList>
                {props.list.map(({element,i}) => (
                    <li style={{'color':'white'}}key={i}>{element}</li>
                ))}
            </StyledQueryList>
        )
    } else {
        return (null)
    }
}

export {QueryList}