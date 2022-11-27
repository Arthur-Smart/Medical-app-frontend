import React from 'react'
import AboutHero from '../../components/abouthero/AboutHero'
import JuniorTeam from '../../components/juniourteam/JuniorTeam'
import MissionStatements from '../../components/missionstatements/MissionStatements'
import Team from '../../components/team/Team'
import './about.css'

function About() {
  return (
    <div className='about'>
        <AboutHero/>
        <Team/>
        <JuniorTeam/>
        <MissionStatements/>
    </div>
  )
}

export default About
