import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { useTranslation } from 'react-i18next'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('All');
  const [t,i18next]=useTranslation("global")
  const projects = t('projects', { returnObjects: true });
  return (
    <Container id="projects">
      <Wrapper>
        <Title>{t("Projects.Projects")}</Title>
        <Desc>
          {t("Projects.desc")}
         </Desc>
        <ToggleButtonGroup >
          {toggle === 'All' ?
            <ToggleButton active value="All" onClick={() => setToggle('All')}>{t("Projects.All")}</ToggleButton>
            :
            <ToggleButton value="All" onClick={() => setToggle('All')}>{t("Projects.All")}</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>{t("Projects.webapps")}</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>{t("Projects.webapps")}</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>{t("Projects.androidapps")}</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>{t("Projects.androidapps")}</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>{t("Projects.machinelearning")}</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>{t("Projects.machinelearning")}</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'All' && projects
            .map((project) => (
              <ProjectCard project={project} t={t} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} t={t} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects