import React from 'react'
import SettingSection from './settingSection'
import { User } from 'lucide-react'


function Profile() {
    return (
        <SettingSection icon={User} title={"Profile"}>
            <div className='flex flex-col sm:flex-row items-center mb-6'>
                <img
                    src='https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/465786270_590743746639489_919453564657659593_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bPspdFo0BzkQ7kNvgGCw8Rx&_nc_zt=23&_nc_ht=scontent.fbkk7-3.fna&_nc_gid=AuuPUsQxZeNoW_XG_F2y42X&oh=00_AYCBjgackVwlOYVKDhUmywv86m01sjeEt3GSe_B_WZpOKA&oe=67331109'
                    alt='Profile'
                    className='rounded-full w-20 h-20 object-cover mr-4'
                />

                <div>
                    <h3 className='text-lg font-semibold text-gray-100'>Ai Chorn</h3>
                    <p className='text-gray-400'>aabcdefg@example.com</p>
                </div>
            </div>

            <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
                Edit Profile
            </button>
        </SettingSection>
    )
}

export default Profile