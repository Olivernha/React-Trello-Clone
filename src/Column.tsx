import { ColumnContainer, ColumnTitle,  } from "./styles"
import React from "react";
import { Card } from "./Card"

type ColumnProps = {
    text: string,

}
const Column : React.FC<ColumnProps>= (props) =>{
    return (
        <ColumnContainer>
             <ColumnTitle>{props.text}</ColumnTitle>
            <Card text="Generate app scaffold" />
            <Card text="Learn TypeScript" />
             <Card text="Begin to use static typing" />

             </ColumnContainer>
    )
}
export default Column;