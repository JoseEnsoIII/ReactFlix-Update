import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBell, FaCog } from "react-icons/fa";
import SearchModal from "../Modal/SearchModal";

// Styled Components
const Nav = styled.nav`
  background-color: #141414;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 30px;
  margin-left: 5%;
  height: auto;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
`;

const LinkItem = styled.li`
  margin-right: 20px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  font-family: "Netflix Sans", sans-serif; /* Custom Netflix font */

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 15px; /* Adjust the gap value as needed */
`;

const Navbar = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <Nav>
      <Logo src="/vite.svg" alt="Netflix Logo" />
      <Links>
        <LinkItem>
          <Link href="/">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/tv-shows">TV Shows</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/anime">Anime</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/news">News</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/my-list">My List</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/language">Browse By Language</Link>
        </LinkItem>
      </Links>

      <IconContainer>
        <AiOutlineSearch size={20} color="#fff" onClick={openSearchModal} />
        <Link
          style={{
            marginTop: "-1px",
            border: "1px solid white",
            padding: "5px",
            borderRadius: "5px",
          }}
          href="/welcome"
        >
          Kids
        </Link>
        <FaBell size={20} color="#fff" />
        <FaCog size={20} color="#fff" />
      </IconContainer>
      {isSearchModalOpen && <SearchModal onClose={closeSearchModal} />}
    </Nav>
  );
};

export default Navbar;
