import { ColumnContainer, ColumnTitle, CardContainer } from "./styles"
import React from "react";
type ColumnProps = {
    text: string,

}
const Column : React.FC<ColumnProps>= (props) =>{
    return (
        <ColumnContainer>
             <ColumnTitle>{props.text}</ColumnTitle>
             <CardContainer>Generate app scaffold</CardContainer>
             <CardContainer>Learn TypeScript</CardContainer>
             <CardContainer>Begin to use static typing</CardContainer>
             </ColumnContainer>
    )
}
export default Column;