import { styled } from "styled-components"


export const Menu = () => {
    return (
        <StyledMenu>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#testimony">Testimony</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 20px;
    }

    ul li a{
        font-family: "Josefin Sans";
        font-weight: 400;
        font-size: 36px;
        line-height: 1.5;
        color: #7572d5;
    }
    
`