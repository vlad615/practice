import styled, { css } from "styled-components";

type StyledBtnPropsType = {
    color?: string;
    fontSize?: string;
    primary?: boolean;
    outlined?: boolean;
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: ${props => props.color || "#fb3f78"};
    color: snow;
    font-size: ${props => props.fontSize || "25px"};
    font-weigth: bold;

    &:hover{
        background-color: #4053cc;
    }

    ${props=>props.outlined && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#fb3f78"};
        background-color: transparent;
        color: ${props => props.color || "#fb3f78"} 

        &:hover{
            border: none;
        }
    `}

    ${props=>props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#fb3f78"};
        color: snow;
    `}
`

// const SuperBtn = styled.button.