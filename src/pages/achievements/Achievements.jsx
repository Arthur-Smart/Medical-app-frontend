import React from 'react'
import AchievementHero from '../../components/achievementhero/AchievementHero'
import AchievementDetails from '../../components/achievementsdetails/AchievementDetails'
import AchievementStories from '../../components/achievementstroies/AchievementStories'
import './achievements.css'

function Achievements() {
  return (
    <div className='achievements'>
        <AchievementHero/>
        <AchievementStories/>
        <AchievementDetails/>
    </div>
  )
}

export default Achievements