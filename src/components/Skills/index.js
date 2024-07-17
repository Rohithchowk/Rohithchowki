import React from 'react'
import styled ,{keyframes} from 'styled-components'
import { skills } from '../../data/constants'
import { useTranslation } from 'react-i18next'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`
const boxReflect = keyframes`
  0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90%, 92% {
    text-shadow: 0 0 5px #03e9f4;
  }
  
  18.1%, 20%, 30%, 60%, 65%, 80%, 85%, 93%, 100% {
    text-shadow: 0px 0px 10px #03e9f4,
                0 0 20px #03e9f4,
                0 0 40px #03e9f4,
                0 0 80px #03e9f4,
                0 0 160px #03e9f4;
  }
`;

const pulse=keyframes`
0% {
    -webkit-transform: scale(1);
    
    transform: scale(1) rotateX(0deg);
    box-shadow: #03e9f4 0px 2px 4px;
    
  }
  50% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    border: 3px solid #03e9f4;
    
    
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    
    
  }

`

const fadeIn =keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
animation: ${boxReflect} 2.8s linear infinite;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`



const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 2px solid ${({ theme }) => theme.text_primary };
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
   -webkit-animation: ${fadeIn} 0.8s ease-in-out, ${pulse} 2s infinite, ease-in-out,  infinite;
  animation: ${fadeIn} 0.8s ease-in-out, ${pulse} 2s infinite,  ease-in-out,  infinite;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {

  const [t,i18n]=useTranslation("global");
  const skillsData = t('skills', { returnObjects: true });
  
  return (
    <Container id="skills">
      <Wrapper>
        <Title>{t("SKills.skills")}</Title>
        <Desc>{t("SKills.here")}
        </Desc>
        <SkillsContainer>
        {skillsData.map((skillCategory, index) => (
            <Skill key={index}>
              <SkillTitle>{t(`${skillCategory.title}`)}</SkillTitle>
              <SkillList>
                {skillCategory.skills.map((skill, idx) => (
                  <SkillItem key={idx}>
                    <SkillImage src={skill.image} alt={skill.name} />
                    {t(`${skill.name}`)}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills