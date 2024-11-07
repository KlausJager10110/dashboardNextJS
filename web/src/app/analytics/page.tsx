"use client"

import AIPoweredInsights from '@/components/analytic/aiPoweredInsights';
import ChannelPerformance from '@/components/analytic/channelPerformance';
import CustomerSegmentation from '@/components/analytic/customerSegmentation';
import OverviewCards from '@/components/analytic/overviewCards';
import ProductPerformance from '@/components/analytic/productPerformance';
import RevenueChart from '@/components/analytic/revenueChart';
import UserRetention from '@/components/analytic/userRetention';
import Header from '@/components/common/header';
import React from 'react'



function Analytics() {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
            <Header title={"Analytics Dashboard"} />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <OverviewCards />
                <RevenueChart />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <ChannelPerformance />
                    <ProductPerformance />
                    <UserRetention />
                    <CustomerSegmentation />
                </div>

                <AIPoweredInsights />
            </main>
        </div>
    );
}

export default Analytics