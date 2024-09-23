
import styled from "styled-components"
import uploadIcon from '../../assets/images/upload.svg'
import closeIcon from '../../assets/images/close.svg'
import { useContext, useRef, useState } from "react"
import { DataContext } from "../../Context"
import exampleImg from '../../assets/images/imagem1.png'

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

    cursor: pointer;
    &:hover{
        scale: 1.02
    }
`
const StyledUploadedImgName = styled.h3`
    color: var(--medium-gray);
    font-family: var(--font-primary);
    font-size: 12px;

    display: flex;
    gap: 4px;
`
const ImageLoader = () => {


    const { displayImg, setDisplayImg } = useContext(DataContext);
    const fileInputRef = useRef(null);
    const [displayImgName, setDisplayImgName] = useState('image_projeto.png');


    const handleButtonClick = () => {
        fileInputRef.current.click(); // transfere o click pro input de imagem
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); //gera url temporaria do arquivo enviado
            setDisplayImg(imageUrl);
            setDisplayImgName(file.name);
        }
    };

    const resetImgInput = () => {
        setDisplayImg(exampleImg);
        setDisplayImgName('image_projeto.png');
    }


    return (
        <StyledContainer>
            <StyledImgBox>
                <img src={displayImg ? displayImg : exampleImg} alt="Example image upload" />
            </StyledImgBox>
            <StyledUploadButton onClick={handleButtonClick} >
                Upload Image
                <img src={uploadIcon} />
            </StyledUploadButton>
            <input
                type="file"
                accept="image/*"
                id="image-upload"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange} />
            <StyledUploadedImgName>
                {displayImgName}
                <img style={{cursor: 'pointer'}} onClick={resetImgInput} src={closeIcon} />
            </StyledUploadedImgName>
        </StyledContainer>
    )

}

export default ImageLoader