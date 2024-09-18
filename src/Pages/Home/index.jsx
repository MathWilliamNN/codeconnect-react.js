import styled from "styled-components"
import ImageLoader from "../../Components/ImageLoader"
import ImageForm from "../../Components/ImageForm"


const StyledContainer = styled.section`
    background-color: var(--dark-gray);
    border-radius: 8px;
    padding: 32px;

    display: flex;
    gap: 24px;
`

const Home = () => {

    return (
        <StyledContainer>
            <ImageLoader />
            <ImageForm />
        </StyledContainer>

    )
}

export default Home