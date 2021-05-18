import React from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,
ServicesH2, ServicesP,ServicesCard3, ServicesCard2} from "./ServicesElement"
import Icon1 from "../../Images/5.svg";
import Icon2 from "../../Images/6.svg";
import Icon3 from "../../Images/7.svg";

const Services = () => {
    return (
        <>
          <ServicesContainer id="services">
              <ServicesH1>Our Services</ServicesH1>
              <ServicesWrapper>
                  <ServicesCard initial={{y: 500}}
                  animate={{y:0}}
                  translate={{delay:30, type:"spring", stiffness: 150}}>
                      <ServicesIcon src={Icon1}/>
                      <ServicesH2>Reduce expenses</ServicesH2>
                      <ServicesP>We help reduce your fees and increase your overall 
                          revenue.
                      </ServicesP>
                  </ServicesCard>
                  <ServicesCard2 
                  initial={{y: 500}}
                  animate={{y:0}}
                  translate={{delay:20, type:"spring", stiffness: 150}}>
                      <ServicesIcon src={Icon2}/>
                      <ServicesH2>Virtual Offices</ServicesH2>
                      <ServicesP>You can access our platform online anywhere in the world.
                      </ServicesP>
                  </ServicesCard2>
                  <ServicesCard3 initial={{y: 500}}
                  animate={{y:0}}
                  translate={{delay:10, type:"spring", stiffness:150}}>
                      <ServicesIcon src={Icon3}/>
                      <ServicesH2>Premium Benefits</ServicesH2>
                      <ServicesP>Unlock our special membership card that returns 5% cash back.
                      </ServicesP>
                  </ServicesCard3>
              </ServicesWrapper>
              </ServicesContainer>  
        </>
    )
}

export default Services
