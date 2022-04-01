

import React from 'react'
// import { Link } from 'react-router-dom';
import { BsFillBasket2Fill} from "react-icons/bs";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarker,
  FaArrowRight,
} from "react-icons/fa";

import {
  FooterWrapper,
  FooterBoxWrapper,
  FooterBoxHeader,
  SocialIconSWrapper,
  BoxLeftText,
  FooterLinks,
  EmailInput,
  PaymentImage,
  CreditContainer,
} from "./Footer";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBoxWrapper>
        <div>
          <FooterBoxHeader>
            Groco <BsFillBasket2Fill className="groco-icon" />
          </FooterBoxHeader>
          <BoxLeftText>
            Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Aliquam, Saepe.
          </BoxLeftText>
          <SocialIconSWrapper>
            <FaFacebookF className="share" />
            <FaTwitter className="share" />
            <FaInstagram className="share" />
            <FaLinkedin className="share" />
          </SocialIconSWrapper>
        </div>

        <div>
          <FooterBoxHeader>contact info</FooterBoxHeader>
          <FooterLinks to="#">
            <FaPhoneAlt /> +2348095294533
          </FooterLinks>
          <FooterLinks to="#">
            <FaPhoneAlt /> +2348095294533
          </FooterLinks>
          <FooterLinks to="#">
            <FaEnvelope /> smoothj679@gmail.com
          </FooterLinks>
          <FooterLinks to="#">
            <FaMapMarker /> Lagos, Nigeria
          </FooterLinks>
        </div>

        <div>
          <FooterBoxHeader>quick links</FooterBoxHeader>
          <FooterLinks to="#">
            <FaArrowRight /> home
          </FooterLinks>
          <FooterLinks to="#">
            <FaArrowRight /> features
          </FooterLinks>
          <FooterLinks to="#">
            <FaArrowRight /> products
          </FooterLinks>
          <FooterLinks to="#">
            <FaArrowRight /> categories
          </FooterLinks>
          <FooterLinks to="#">
            <FaArrowRight /> review
          </FooterLinks>
          <FooterLinks to="#">
            <FaArrowRight /> blogs
          </FooterLinks>
        </div>

        <div>
          <FooterBoxHeader>newsletter</FooterBoxHeader>
          <BoxLeftText>subscribe for latest updates</BoxLeftText>
          <EmailInput type="email" placeholder="your email" className="email" />
          <input type="submit" value="subscribe" className="btn" />
          <PaymentImage src="assets/payment.png" alt="" />
        </div>
      </FooterBoxWrapper>
      <CreditContainer>
        created by <span> Shehu Abdulkadir </span> | all rights reserved
      </CreditContainer>
    </FooterWrapper>
  );
}

export default Footer