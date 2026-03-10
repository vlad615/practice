import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Card } from './components/Card';
import { StyledWrapper } from './components/Wrapper';
import image from "./components/accets/Rectangle 1.png"


function App() {
    return (<>
        {/* <Header /> */}
        <Wrapper wrap='wrap' gap='20px' margin='0 auto' maxwidth='1440px' padding='15px'>
            <Card img={image} title="Headline" description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'/>
            <Card img={image} title="Headline" description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'/>
            <Card img={image} title="Headline" description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'/>
            <Card img={image} title="Headline" description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'/>
            <Card img={image} title="Headline" description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'/>
            <Card img={image} title="Headline" description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'/>
            <Card img={image} title="Headline" description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'/>
            <Card img={image} title="Headline" description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'/>
            <Card img={image} title="Headline" description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'/>
        </Wrapper>
        </>
        
    );
}

const Wrapper = styled(StyledWrapper)`
    @media screen and (max-width: 576px){
        justify-content: center;
        align-items: center;
    }
`

export default App;






