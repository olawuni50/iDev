import styled from "styled-components";
import {motion} from "framer-motion"



export const ServicesContainer = styled.div`
height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

/* ipad */
@media screen and (max-width: 768px){
    height: 1100px;
};

/* small phone */
@media screen and (max-width: 480px){
    height: 1250px;
}
`

export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
margin-bottom: 19rem;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
    margin-bottom: 9rem;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px
}
`
export const ServicesCard = styled(motion.div)`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start; 
align-items: center;
border-radius:10px;
max-height: 340px;
height:auto;
padding: 3rem;
padding-top:1rem;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;


@media screen and (max-width: 768px){
    margin: 3rem;
margin-top:5px;
margin-bottom:10px;
}

@media screen and (max-width: 480px){
    margin: 3rem;
margin-top:5px;
margin-bottom:10px;
}

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const ServicesCard2 = styled(motion.div)`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start; 
align-items: center;
border-radius:10px;
max-height: 340px;
height:auto;
padding: 3rem;
padding-top:1rem;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;


@media screen and (max-width: 768px){
    margin: 3rem;
margin-top:5px;
margin-bottom:10px;
}

@media screen and (max-width: 480px){
    margin: 3rem;
margin-top:5px;
margin-bottom:10px;
}

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const ServicesCard3 = styled(motion.div)`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start; 
align-items: center;
border-radius:10px;
max-height: 340px;
height:auto;
padding: 2.7rem;
padding-top:1rem;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;


@media screen and (max-width: 768px){
    margin: 3rem;
margin-top:5px;
margin-bottom:10px;
}

@media screen and (max-width: 480px){
    margin: 3rem;
margin-top:5px;
margin-bottom:10px;
}

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const ServicesIcon = styled.img`
height: 120px;
width: 120px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;
padding-top: 3em;

@media screen and (max-width: 480px){
font-size: 2rem;
}
`

export const ServicesH2 = styled.h2`
font-size: 1.5rem;
margin-top: 3px;
margin-bottom: 5px;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`