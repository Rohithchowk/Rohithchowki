import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const [t,i18]=useTranslation('global')
    const roles = t('Bio.roles', { returnObjects: true });
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                   
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        {/* <Title>Hi, I am <br /> {Bio.name}</Title> */}
                        <Title>
                        {t("Bio.name")}
                        </Title>
                        <TextLoop>
                        {t("Bio.textloop")}
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{t("Bio.description")}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>{t("Bio.checkresume")}</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection