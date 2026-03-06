import styled from 'styled-components';
import { Title } from './components/Title.styled';
import { Form, Field } from './components/Form.styled';
import { StyledBtn } from './components/Button.styled';


function App() {
    return (<>
            <Box>
                <StyledBtn color="#7f25f5">Старт</StyledBtn>
                <StyledBtn fontSize='2rem' outlined>Стоп</StyledBtn>
                <StyledBtn primary>Занаво</StyledBtn>
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

    button {
        cursor: pointer;
    }
`

export default App;






