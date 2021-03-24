import React from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,
ServicesH2, ServicesP} from "./ServicesElement"
import Icon1 from "../../Images/5.svg";
import Icon2 from "../../Images/6.svg";
import Icon3 from "../../Images/7.svg";

const Services = () => {
    return (
        <>
          <ServicesContainer id="services">
              <ServicesH1>Our Services</ServicesH1>
              <ServicesWrapper>
                  <ServicesCard>
                      <ServicesIcon src={Icon1}/>
                      <ServicesH2>Reduce expenses</ServicesH2>
                      <ServicesP>We held reduce your fees and icrease your overall 
                          revenue.
                      </ServicesP>
                  </ServicesCard>
                  <ServicesCard>
                      <ServicesIcon src={Icon2}/>
                      <ServicesH2>Virtual Offices</ServicesH2>
                      <ServicesP>You can access our platform online anywhere in the world.
                      </ServicesP>
                  </ServicesCard>
                  <ServicesCard>
                      <ServicesIcon src={Icon3}/>
                      <ServicesH2>Premium Benefits</ServicesH2>
                      <ServicesP>Unlock our special membership card that returns 5% cash back.
                      </ServicesP>
                  </ServicesCard>
              </ServicesWrapper>
              </ServicesContainer>  
        </>
    )
}

export default Services
