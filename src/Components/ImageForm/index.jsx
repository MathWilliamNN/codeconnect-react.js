import styled from "styled-components";
import uploadIcon from '../../assets/images/upload.svg'
import deleteIcon from '../../assets/images/trash.svg'
import closeIcon from '../../assets/images/close-black.svg'


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
const StyledTagsContainer = styled.div`
    display: flex;
    gap: 16px;
`
const StyledTag = styled.h2`
    color: var(--graphite);
    background-color: var(--medium-gray);
    padding: 8px;
    border-radius: 4px;

    font-size: 16px;
    font-weight: 500;
`
const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
`
const StyledDiscardButton = styled.button`
    width: 45%;
    background-color: var(--dark-gray);
    color: var(--highlight-green);
    border: 1px solid var(--highlight-green);
    border-radius: 8px;
    font-family: var(--font-primary);
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px;
`
const StyledUploadButton = styled.button`
    width: 45%;
    height: 100%;
    background-color: var(--highlight-green);
    color: var(--graphite);
    border-radius: 8px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px;
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
            <StyledTagsContainer>
                <StyledTag> Tag 1 <img src={closeIcon} /></StyledTag>
                <StyledTag> Tag 2 </StyledTag>
            </StyledTagsContainer>
            <StyledButtonsContainer>
                <StyledDiscardButton> Discard <img src={deleteIcon} /></StyledDiscardButton>
                <StyledUploadButton> Publish <img style={{filter: 'brightness(35%)'}} src={uploadIcon} /> </StyledUploadButton>
            </StyledButtonsContainer>
        </StyledContainer>
    )
}

export default ImageForm