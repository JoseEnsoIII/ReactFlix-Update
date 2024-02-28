import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBell, FaCog, FaBars } from "react-icons/fa"; // Added FaBars for menu icon
import SearchModal from "../Modal/SearchModal";

// Styled Components
const Nav = styled.nav`
  background-color: #141414;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;

  @media screen and (max-width: 600px) {
    justify-content: space-around; // Adjust alignment for smaller screens
  }
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  margin-right: 2%; // Added margin for spacing on smaller screens

  @media screen and (max-width: 600px) {
    display: none; // Hide links on smaller screens initially
  }
`;

const LinkItem = styled.li`
  margin-right: 20px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 10px;
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

  @media screen and (max-width: 600px) {
    justify-content: flex-end; // Adjust alignment for smaller screens
    width: 50%; // Limit the width to allow space for the menu icon
  }
`;

const MenuIcon = styled(FaBars)`
  display: none; // Initially hide the menu icon
  font-size: 20px;
  color: #fff;

  @media screen and (max-width: 600px) {
    display: block; // Display the menu icon on smaller screens
  }
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
      <h1 style={{ marginLeft: "2%", fontSize: "18px" }}>ReactFlix</h1>
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
        <AiOutlineSearch
          size={20}
          color="#fff"
          onClick={openSearchModal}
          style={{ width: "20px", height: "20px" }} // Responsive style
        />
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
        <FaBell
          size={20}
          color="#fff"
          style={{ width: "20px", height: "20px" }} // Responsive style
        />
        <FaCog
          size={20}
          color="#fff"
          style={{ width: "20px", height: "20px" }} // Responsive style
        />
        <MenuIcon />
      </IconContainer>
      {isSearchModalOpen && <SearchModal onClose={closeSearchModal} />}
    </Nav>
  );
};

export default Navbar;
