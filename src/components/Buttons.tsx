import styled from "styled-components";


type ButtonProps = {
    height?: string;
    width?: string;
    color?: string;
    padding?: string;
    background?: string;
    hoverBg?: string;
}

export const StyledButton = styled.button<ButtonProps>`
    height: ${props => props.height || "none"};
    width: ${props => props.width || "none"};
    color: ${props => props.color || "#fff"};
    padding: ${props => props.padding || "5px 20px"};
    background: ${props => props.background || "#4E71FE"};
    border: solid 2px ${props => props.background || "#4E71FE"};
    border-radius: 5px;

    &:hover{
        color: ${props => props.background || "#4E71FE"};
        border-color: ${props => props.background || "#4E71FE"};
        background-color: ${props => props.hoverBg || "transparent"};
    }
`