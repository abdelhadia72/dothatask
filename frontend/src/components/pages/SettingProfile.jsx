import React from 'react'
import Personalinfo from '../settingProfile/Personalinfo'
import Personaldescription from '../settingProfile/Personaldescription'

function SettingProfile() {
  return (
    <div className='lg:m-32 m-0'>
        <div className='flex flex-col gap-16'>
            <div className="text-neutral-800 lg:text-5xl md:text-3xl text-2xl font-bold mx-4">My Profile</div>
            <div className='flex lg:flex-row flex-col gap-14 mx-auto'>
              <Personalinfo />
              <Personaldescription />
            </div>
        </div>
    </div>
  )
}

export default SettingProfile