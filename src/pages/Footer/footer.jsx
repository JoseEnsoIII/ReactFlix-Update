import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column; /* Changed direction to column */
  align-items: center; /* Center align items horizontally */
  background-color: #141414;
  color: #fff;
  padding: 20px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  text-align: left;
  font-size: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterYear = styled.div`
  color: #fff;
  font-size: 12px;
  margin-top: 20px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div style={{ display: 'flex' }}> {/* Added a container div to hold the footer sections */}
                <FooterSection>
                    <FooterLink href="#">Home</FooterLink>
                    <FooterLink href="#">TV Shows</FooterLink>
                    <FooterLink href="#">Movies</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterLink href="#">New & Popular</FooterLink>
                    <FooterLink href="#">My List</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterLink href="#">Coming Soon</FooterLink>
                    <FooterLink href="#">Settings</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterLink href="#">Help Center</FooterLink>
                    <FooterLink href="#">Sign Out</FooterLink>
                </FooterSection>
            </div>
            <FooterYear>
                <p style={{fontSize:"10px"}}>© {new Date().getFullYear()} ReactFlix, Inc.</p>
            </FooterYear>
        </FooterContainer>
    );
};

export default Footer;
