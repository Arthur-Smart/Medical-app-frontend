import React from 'react'
import AboutHero from '../../components/abouthero/AboutHero'
import JuniorTeam from '../../components/juniourteam/JuniorTeam'
import MissionStatements from '../../components/missionstatements/MissionStatements'
import Team from '../../components/team/Team'

function About() {
  return (
    <div>
        <AboutHero/>
        <Team/>
        <JuniorTeam/>
        <MissionStatements/>
    </div>
  )
}

export default About