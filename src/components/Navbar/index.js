import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink,ToggleButton } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Bio } from '../../data/constants';
import './Navbar.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { light } from '@mui/material/styles/createPalette';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Navbar = ({darkMode,setDarkMode}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const { t, i18n } = useTranslation('global');
 
  const toggle_mode=()=>{
    
    setDarkMode(!darkMode)
    console.log(darkMode)
  }
 
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false); // Close the mobile menu after language change
  };
 
  return (
    <Nav>
      <NavbarContainer>
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9',border : "2px solid #854CE6" ,borderRadius:"20px",height:"50px"}}>
  <select
    value={i18n.language}
    onChange={(e) => changeLanguage(e.target.value)}
    style={{ padding: '6px', marginRight: '4px', fontSize: '16px', border: '2px solid #854CE6', borderRadius: '15px', backgroundColor: '#fff', cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none' }}
  >
    <option value="en" style={{ padding: '4px', backgroundColor: '#fff', color: '#000' }}><ArrowRightOutlinedIcon/>English</option>
    <option value="tel" style={{ padding: '4px', backgroundColor: '#fff', color: '#000' }}><ArrowRightOutlinedIcon/>తెలుగు</option>
    <option value="hin" style={{ padding: '4px', backgroundColor: '#fff', color: '#000' }}><ArrowRightOutlinedIcon/>हिंदी</option>
  </select>
  <ToggleButton
            
            onClick={toggle_mode}
          >
            {/* {darkMode===true?"dark":"light"} */}
            {darkMode===true?(<LightModeOutlinedIcon/>):(<DarkModeOutlinedIcon/>)}

  </ToggleButton>
  
     </div>

        {/* <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>{t("Navbar.portfolio")}</Span>
          </a>
        </NavLogo> */}
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink  href="#about">{t("Navbar.about")}</NavLink>
          <NavLink  href='#skills'>{t("Navbar.skills")}</NavLink>
          <NavLink  href='#experience'>{t("Navbar.experience")}</NavLink>
          <NavLink  href='#projects'>{t("Navbar.projects")}</NavLink>
          <NavLink  href='#education'>{t("Navbar.education")}</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton  href={Bio.github} target="_blank">{t("Navbar.githubprofile")}</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
