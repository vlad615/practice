import styled, { css } from "styled-components";
import { Ligth } from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string;
    fontSize?: string;
    primary?: boolean;
    outlined?: boolean;
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border-radius: 10px;
    padding: 10px 20px;
    background-color: ${props => props.color || "#fb3f78"};
    color: snow;
    font-size: ${props => props.fontSize || "25px"};
    font-weight: bold;

    &:hover{
        background-color: #4053cc;
    }

    ${props=>props.outlined && css<StyledBtnPropsType>`
        color: ${props => props.color || "#fb3f78"}; 
        border: 2px solid ${props => props.color || "#fb3f78"};
        background-color: transparent;

        &:hover{
            border-color: #4053cc;
        }
    `}

    ${props=>props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#fb3f78"};
        color: snow;
    `}
`

export const SuperBtn = styled(StyledBtn)`
        box-shadow: 5px 10px 10px ${props => props.color || "#ff6e9aff"};

        &:hover{
            animation: ${Ligth} 1.3s linear infinite;
        }
`
export const Link = styled.a`
    transition: transform 0.3s ease-in;

    &:hover{
            transform: translate(0px, 20px) scale(2.5);
            // transform: skew(30deg, 30deg);
        }
`
