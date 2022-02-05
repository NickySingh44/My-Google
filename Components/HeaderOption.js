import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/solid'
import React from 'react'
import Options from './Options'

const HeaderOption = () => {
    return (
        <>
            {/* left */}
            <div className='flex w-full justify-evenly text-sm text-gray-700
            lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b
            '>

         
            <div className='flex space-x-6'>
                <Options Icon={SearchIcon} title="All" selected/>
                <Options Icon={PhotographIcon} title="Images" />
                <Options Icon={PlayIcon} title="Videos" />
                <Options Icon={NewspaperIcon} title="News" />
                <Options Icon={MapIcon} title="Maps" />
                <Options Icon={DotsVerticalIcon} title="More" />
            </div>
            {/* right */}
            <div className='flex space-x-4'>
                <p className='link'>Settings</p>
                <p className='link'>Tools</p>
            </div>
            </div>
        </>
    )
}

export default HeaderOption
