import React from 'react'
import Personalinfo from '../settingProfile/Personalinfo'

function SettingProfile() {
  return (
    <div className='m-32'>
        <div className='flex flex-col gap-16'>
            <div className="text-neutral-800 text-5xl font-bold ">My Profile</div>
            <Personalinfo />
        </div>
    </div>
  )
}

export default SettingProfile