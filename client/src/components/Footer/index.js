import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialMedia } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/google.com'>How it works</FooterLink>
                            <FooterLink to='/google.com'>Developers</FooterLink>
                            <FooterLink to='/google.com'>Careers</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Vedios</FooterLinkTitle>
                            <FooterLink to='/google.com'>How it works</FooterLink>
                            <FooterLink to='/google.com'>Testimonials</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/google.com'>Check out our socials</FooterLink>
                            <FooterLink to='/google.com'>Link With us with Github</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/Instergram'>Instargram</FooterLink>
                            <FooterLink to='/FaceBook'>FaceBook</FooterLink>
                            <FooterLink to='/Youtube'>Youtube</FooterLink>
                            <FooterLink to='/Twitter'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome}>
                            Info nav
                        </SocialLogo>
                        <WebsiteRights>Info Nav © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instargram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='/www.twitter.com/erick_adikah' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/www.twitter.com/erick_adikah' target='_blank' aria-label='Twitter'>
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;