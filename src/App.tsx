import styled from 'styled-components';
import { Title } from './components/Title.styled';
import { Form, Field } from './components/Form.styled';
import { StyledBtn, SuperBtn, Link } from './components/Button.styled';

function App() {
    return (<>
            <Box>
                <SuperBtn color="#7f25f5">Старт</SuperBtn>
                <StyledBtn fontSize='2rem' outlined>Стоп</StyledBtn>
                <SuperBtn as={Link} href='https://google.com' primary>Go to</SuperBtn>
            </Box>
            <Box>
                <Title>Styled-components <span>.attrs</span> method</Title>

                <Form>
                    <Field/>
                    <Field/>
                    <Field/>
                </Form>
            </Box>
        </>
        
    );
}

const Box = styled.div`
    height: 100% ;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

export default App;






