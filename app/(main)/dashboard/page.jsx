// import { getIndustryInsights } from '@/actions/dashboard'
// import { getUserOnboardingStatus } from '@/actions/user'
// import { redirect } from 'next/navigation'
// // import { redirect } from 'next/dist/server/api-utils'
// import React from 'react'
// import DashboardView from './_component/dashboard-view'

// const IndustryInsightsPage = async() => {
//   const {isOnboarded} =await getUserOnboardingStatus()
//   const insights = await getIndustryInsights()
//   console.log(insights)
//   if(!isOnboarded || !insights ){
//     redirect("/onboarding")
//   }
      
//   return (
//     <div className='container mx-auto'>
//       <DashboardView  insights={insights}/>
//     </div>
//   )
// }

// export default IndustryInsightsPage
import { getIndustryInsights } from '@/actions/dashboard'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
import React from 'react'
import DashboardView from './_component/dashboard-view'

const IndustryInsightsPage = async() => {
  try {
    // Check onboarding status first
    const {isOnboarded} = await getUserOnboardingStatus()
    
    if (!isOnboarded) {
      return redirect("/onboarding")
    }

    // Only fetch insights if user is onboarded
    const insights = await getIndustryInsights()
    
    if (!insights) {
      throw new Error("Failed to load industry insights")
    }

    return (
      <div className='container mx-auto'>
        <DashboardView insights={insights}/>
      </div>
    )

  } catch (error) {
    // Log the error for debugging
    console.error("Dashboard Error:", error)

    // Redirect to onboarding if it's a profile completion error
    if (error.message.includes("Complete your profile")) {
      return redirect("/onboarding")
    }

 
    throw error // This will trigger Next.js error boundary
  }
}

export default IndustryInsightsPage