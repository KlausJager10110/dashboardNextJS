"use client"

import Header from '@/components/common/header'
import ConnectedAccounts from '@/components/setting/connectedAccounts'
import DangerZone from '@/components/setting/dangerZone'
import Notifications from '@/components/setting/notifications'
import Profile from '@/components/setting/profile'
import Security from '@/components/setting/security'
import React from 'react'


function Settings() {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
            <Header title='Settings' />
            <main className=' max-w-4xl mx-auto py-6 px-4 lg:px-8'>
                <Profile />
                <Notifications />
                <Security />
                <ConnectedAccounts />
                <DangerZone />
            </main>
        </div>
    )
}

export default Settings