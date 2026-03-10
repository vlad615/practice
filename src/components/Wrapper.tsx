import { styled } from "styled-components";


type FlexWrapperProps = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    padding?: string;
    margin?: string;
    maxwidth?: string;
}

export const StyledWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    max-width: ${props => props.maxwidth || "none"};
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0px"};
    padding: ${props => props.padding || "0px"};
    margin: ${props => props.margin || "none"};
`