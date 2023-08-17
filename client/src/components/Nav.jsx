import SearchBar from "./SearchBar";
import styled from "styled-components"
import { Link } from "react-router-dom";

const NavDiv = styled.div`
    display:flex;
    justify-content: flex-end;
    height:40px;
    padding:5px;
    margin: 8px;
`;

const LinkStyle = styled.p`
    margin:4px;
`;

const Nav = ({onSearch, onChange}) => {
    return (
        <NavDiv>
            <Link to="/home">
                <LinkStyle>Home</LinkStyle>
            </Link>
            <Link to="/about">
                <LinkStyle>About</LinkStyle>
            </Link>
            <Link to="/favorites">
                <LinkStyle>Favorites</LinkStyle>
            </Link>
            <SearchBar onSearch={onSearch} onChange={onChange}/>
        </NavDiv>
    )
}

export default Nav;