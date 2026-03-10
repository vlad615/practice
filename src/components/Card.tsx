import styled from "styled-components"
import { StyledWrapper } from "./Wrapper"
import { StyledH2, StyledP } from "./Text"
import { StyledButton } from "./Buttons"

type CardProps = {
    img: string;
    title: string;
    description: string;
}

export const Card = (props: CardProps) => {
    return(
        <StyledCard direction="column" padding="10px" gap="10px" maxwidth="calc(100% / 5 - 20px)">
            <StyledImage src={props.img} alt="desirt"/>
            <StyledH2>{props.title}</StyledH2>
            <StyledP color="#abb3ba">{props.description.length > 81? `${props.description.slice(0, 81)}...` : props.description}</StyledP>
            <StyledWrapper gap="5px" margin="0 0 10px 0">
                <StyledButton>See more</StyledButton>
                <StyledButton>Save</StyledButton>
            </StyledWrapper>
        </StyledCard>
    )
}

const StyledCard = styled(StyledWrapper)`
    border-radius: 15px;
    min-width: 180px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: #fff;

    @media screen and (max-width: 1200px){
        max-width: calc(100% / 4 - 20px)
    }

    @media screen and (max-width: 845px){
        max-width: calc(100% / 2 - 10px)
    }

    @media screen and (max-width: 576px){
        max-width: 100%
    }
`

const StyledImage = styled.img`
    width: 100%;
    border-radius: 10px;
`
