
import styled from "styled-components";
import Logo from "../../assets/images/Logo.svg"
import Feed from "../../assets/images/Feed.svg"
import AccountCircle from "../../assets/images/account_circle.svg"
import Info from "../../assets/images/info.svg"
import Logout from "../../assets/images/Logout.svg"
import { Link, useLocation } from "react-router-dom";


const StyledAside = styled.aside`
    background-color: var(--dark-gray);
    border-radius: 8px;
    color: var(--white);
    width: 177px;

    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    padding: 40px;

    `
const StyledPublishLink = styled(Link)`
    background-color: var(--dark-gray);
    padding: 12px 30px 12px 30px;
    color: var(--highlight-green);
    border: 1px solid var(--highlight-green);
    border-radius: 8px;
    font-family: var(--font-primary);
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
        scale:1.1;
    }
    `
const StyledNavLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background-color: var(--dark-gray);
    border: none;
    text-decoration: none;

    &:hover {
        scale:1.1;
    }
    `
const StyledNavButtonText = styled.h2`
    font-family: var(--font-primary);
    font-size: 16px;
    font-weight: 400;
`
const Sidebar = () => {

    const NavButtons = [
        {
            text: "Feed",
            id: 0,
            src: Feed,
            alt: "Sheet Icon",
            route: '/feed'
        },
        {
            text: "Profile",
            id: 1,
            src: AccountCircle,
            alt: "Profile icon",
            route: "/profile"
        },
        {
            text: "About us",
            id: 2,
            src: Info,
            alt: "Info icon",
            route: '/info'
        },
        {
            text: "Exit",
            id: 3,
            src: Logout,
            alt: "Exit icon",
            route: '/exit'
        }
    ];

    const location = useLocation();

    return (
        <StyledAside>
            <img src={Logo} alt="Codeconnect Logo" />
            <StyledPublishLink to={'/'} > Publish </StyledPublishLink>
            {
                NavButtons.map((button) =>
                    <StyledNavLink to={button.route} key={button.id}>
                        <img
                            src={button.src}
                            alt={button.alt}
                            style={{
                                filter: location.pathname === button.route
                                    ? 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(2)'
                                    : 'invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.6)',
                            }}
                        />
                        <StyledNavButtonText style={{ color: location.pathname === button.route ? 'var(--white)' : 'var(--light-gray)' }} > {button.text} </StyledNavButtonText>
                    </StyledNavLink>
                )
            }
        </StyledAside>
    )
}

export default Sidebar