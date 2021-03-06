import React, {useState, useEffect} from 'react';
import {FiAlignRight} from "react-icons/fi"
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon,
NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './Navbar.elements';
import {animateScroll as scroll} from "react-scroll";

const Navbar = ({toggle}) => { 
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", changeNav)
    }, [])

    const toggleHome =()=>{
        scroll.scrollToTop()
    }
    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer> 
                <NavbarLogo to="/" onClick={toggleHome}
                initial={{y:-250}}
                animate={{y:-1}}
                transition={{delay: 1, type:"spring", stiffness:120}}>iDev </NavbarLogo>
                <MobileIcon onClick={toggle}>
                    <FiAlignRight/>
                </MobileIcon>
              <NavMenu>
                <NavItem>
                    <NavLinks to="about"
                    smooth={true} duration={500} spy={true} exact="true"
                    offset={-80} 
                    > About</NavLinks>  
                </NavItem>
                <NavItem>
                    <NavLinks to="discover" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80} > Discover</NavLinks>  
                </NavItem>
                <NavItem>
                    <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80} >Services</NavLinks>  
                </NavItem>
                <NavItem>
                    <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80} >Sign UP</NavLinks>  
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
