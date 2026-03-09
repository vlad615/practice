import styled from "styled-components";


type TextProps = {
    family?: "Inter" | "Josefin Sans" | "Poppins";
    weight?: number;
    heigth?: number;
    size?: string;
    color?: string;
}

export const StyledH2 = styled.h2<TextProps>`
    font-family: ${props => props.family || "Inter"};
    font-weight: ${props => props.weight || 700};
    font-size: ${props => props.size || "16px"};
    color: ${props => props.color || "#000"};
    line-height: ${props => props.heigth || 1.8}
`

export const StyledP = styled.p<TextProps>`
    font-family: ${props => props.family || "Inter"};
    font-weight: ${props => props.weight || 500};
    font-size: ${props => props.size || "12px"};
    color: ${props => props.color || "#000"};
    line-height: ${props => props.heigth || 1.8}
`