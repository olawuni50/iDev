import React from 'react'
import { Button } from '../ButtonElement'
import {ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper,
TopLine, Heading, Subtitle, BtnWrap, Column2, Img} from './InfoElment'


const InfoSection = ({lightText, id, lightBg, img, imgStart, topLine, darkText,
description, headline, buttonLabel, alt, dark, dark2, primary}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}> 
                        <Column1>
                        <TextWrapper>
                            <TopLine initial={{x: -500}}
                  animate={{x:0}}
                  translate={{delay:50, type:"spring", stiffness: 150}}>{topLine}</TopLine> 
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                             <Button to="home"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact="true"
                             offset={-80}
                             primary={primary ? 1 : 0}
                             dark={dark ? 1:0}
                             dark2={dark2 ? 1:0}
                             >{buttonLabel}</Button>
                            
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
                </InfoContainer>
        </>
    )
}

export default InfoSection
