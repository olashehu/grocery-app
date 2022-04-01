/** @format */

import React, { useState } from "react";

import { Header, Logo, NavbarLink, NavIcons } from "./navbarStyle.jsx";
import {
  FaShoppingBasket,
  FaBars,
  FaUser,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import SearchInput from "../SearchInput/SearchInput.jsx";
import Cart from "../CartComponent/Cart.jsx";
import Login from "../Login/Login.jsx";
import HeroSection from "../HeroSection/HeroSection.jsx";
import Features from "../Features/Features.jsx";
import Products from "../Products/Products.jsx";
import Categories from "../Categories/Categories.jsx";
import Review from "../Review/Review.jsx";
import Blog from "../Blog/Blog.jsx";
import Footer from "../Footer/Footer.jsx";

const Navbar = () => {
  const [isFormInput, setIsFormInput] = useState(false);
  const [isCartComponent, setIsCartComponent] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handle = () => {
    setIsFormInput(!isFormInput);
    setIsCartComponent(false);
    setIsLogin(false);
  };
  const handleCart = () => {
    setIsCartComponent(!isCartComponent);
    setIsFormInput(false);
    setIsLogin(false);
  };
  const handleLogin = () => {
    setIsLogin(!isLogin);
    setIsFormInput(false);
    setIsCartComponent(false);
  };

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  window.onscroll = () => {
     setIsFormInput(false);
     setIsCartComponent(false);
     setIsLogin(false);
     setIsNavbarOpen(false)
  }

  return (
    <>
      <Header showNavbar={isNavbarOpen}>
        <Logo href="#">
          <FaShoppingBasket className="logoIcon" /> groco
        </Logo>
        <nav className="navbar">
          <NavbarLink href="#home">home</NavbarLink>
          <NavbarLink href="#features">features</NavbarLink>
          <NavbarLink href="#products">products</NavbarLink>
          <NavbarLink href="#categories">categories</NavbarLink>
          <NavbarLink href="#review">review</NavbarLink>
          <NavbarLink href="#blogs">blogs</NavbarLink>
        </nav>

        <NavIcons>
          <FaBars className="icons" id="menu-btn" onClick={handleToggle}/>
          <FaSearch className="icons" onClick={handle} />
          <FaShoppingCart className="icons" onClick={handleCart} />
          <FaUser className="icons" onClick={handleLogin} />
        </NavIcons>
        <SearchInput showForm={isFormInput} />
        <Cart showCartComponent={isCartComponent} />
        <Login ShowLogin={isLogin} />
      </Header>
      <HeroSection />
      <Features />
      <Products />
      <Categories />
      <Review />
      <Blog />
      <Footer />
    </>
  );
};

export default Navbar;
