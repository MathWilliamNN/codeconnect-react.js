import styled from "styled-components";
import uploadIcon from '../../assets/images/upload.svg'
import deleteIcon from '../../assets/images/trash.svg'


const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
const StyledFormTitle = styled.h1`
    color: var(--offwhite);
    font-family: var(--font-primary);
    font-size: 28px;
    font-weight: 500;

`
const StyledInputBox = styled.div`
    display: flex;
    flex-direction:column;
    gap: 8px;
`
const StyledInputLabel = styled.label`
    color: var(--offwhite);
    font-family: var(--font-primary);
    font-size:20px;
`
const StyledInput = styled.textarea`
    background-color: var(--medium-gray);
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    width: 420px;
    color: var(--graphite);
    font-family: var(--font-primary);
    font-size: 16px;
    font-weight: 500;

    &::placeholder {
        color: var(--light-gray);
        font-family: var(--font-primary);
        font-size: 16px;
        font-weight: 500;
    }
`

const ImageForm = () => {
    return (
        <StyledContainer>
            <StyledFormTitle> New Project </StyledFormTitle>
            <StyledInputBox>
                <StyledInputLabel> Project Name </StyledInputLabel>
                <StyledInput placeholder="React zero to hero..." />
            </StyledInputBox>
            <StyledInputBox>
                <StyledInputLabel> Description </StyledInputLabel>
                <StyledInput style={{ height: '160px' }} placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..." />
            </StyledInputBox>
            <StyledInputBox>
                <StyledInputLabel> Tags </StyledInputLabel>
                <StyledInput placeholder="React..." />
            </StyledInputBox>
        </StyledContainer>
    )
}

export default ImageForm