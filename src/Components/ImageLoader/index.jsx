
import styled from "styled-components"
import exampleImg from '../../assets/images/imagem1.png'
import uploadIcon from '../../assets/images/upload.svg'
import closeIcon from '../../assets/images/close.svg'

const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: start;
`
const StyledImgBox = styled.div`
    background-color: var(--medium-gray);
    padding: 16px;
    border-radius: 24px;
    > *{
        border-radius: 8px;
    }
`
const StyledUploadButton = styled.button`
    width: 100%;
    background-color: var(--dark-gray);     
    border: 1px solid var(--medium-gray);
    border-radius: 8px;
    color: var(--medium-gray);
    font-family: var(--font-primary);
    font-size: 16px;
    font-weight: 500;
    padding: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap:8px;
`
const StyledUploadedImgName = styled.h3`
    color: var(--medium-gray);
    font-family: var(--font-primary);
    font-size: 12px;

    display: flex;
    gap: 4px;
`
const ImageLoader = () => {
    return (
        <StyledContainer>
            <StyledImgBox>
                <img src={exampleImg} alt="Example image upload" />
            </StyledImgBox>
            <StyledUploadButton>
                Upload Image
                <img src={uploadIcon} />
            </StyledUploadButton>
            <StyledUploadedImgName>
                image_projeto.png
                <img src={closeIcon}/>
            </StyledUploadedImgName>
        </StyledContainer>
    )

}

export default ImageLoader