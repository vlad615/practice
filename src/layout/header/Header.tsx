import styled from "styled-components";
import { Menu } from "../../components/Menu";
import { Logo } from "../../components/Logo";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
        </StyledHeader>

    )
}

const StyledHeader = styled.header`
    padding: 30px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(31, 31, 32, 0.9);
`
