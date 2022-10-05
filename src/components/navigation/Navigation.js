
import homeIcon from "../assets/home-svgrepo-com.svg";
import bookmarkIcon from "../assets/bookmark-clicked.svg";
import profileIcon from "../assets/profile-user-svgrepo-com.svg";
import addIcon from "../assets/add-svgrepo-com.svg"
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export function NavBar(){
    return (
        <Nav>
            <StyledNavLink to="/" end><img src={homeIcon} alt="home icon"/></StyledNavLink>
            <StyledNavLink to="/bookmarks"><img  src={bookmarkIcon} alt="bookmark icon"/></StyledNavLink>
            <StyledNavLink to="/create"><img  src={addIcon} alt="add card icon"/></StyledNavLink>
            <StyledNavLink to="/profile"><img src={profileIcon} alt="profile icon"/></StyledNavLink>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    position: fixed;
    bottom: 0;
    /* justify-self: end;
    align-self: end; */
    justify-content: space-around;
    width: 100%;
    height: 80px;
`

const StyledNavLink = styled(NavLink)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-weight: bolder;
    font-size: 1.2rem;
    background-color: antiquewhite;
    border: 0;
    /* border: 1px solid black; */

    img {
        width: 50px;
        margin: 10px;
    }

    &.active {
        background-color: rgb(192, 218, 241);
    }
    `