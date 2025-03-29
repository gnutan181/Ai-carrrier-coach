import { getIndustryInsights } from '@/actions/dashboard'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
// import { redirect } from 'next/dist/server/api-utils'
import React from 'react'
import DashboardView from './_component/dashboard-view'

const IndustryInsightsPage = async() => {
  const {isOnboarded} =await getUserOnboardingStatus()
  const insights = await getIndustryInsights()
  // console.log(insights)
  if(!isOnboarded){
    redirect("/onboarding")
  }
      
  return (
    <div className='container mx-auto'>
      <DashboardView  insights={insights}/>
    </div>
  )
}

export default IndustryInsightsPage
