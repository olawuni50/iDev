
import React, {useState} from "react"
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InforSection/Data";
import InfoSection from "../components/InforSection/InfoSection";
import Navbar from '../components/Navbar/Navbar'
import Services from "../components/Services/Services";

import Sidebar from '../components/SideBar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection/> 
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services/>
          <InfoSection {...homeObjThree}/>
          <Footer/>
        </>
    )
} 

export default Home
