"use server"

import { db } from "@/lib/prisma"
import { generateAIInsights } from "./dashboard"
import { auth } from '@clerk/nextjs/server'

export async function updateUser(data){

    const {userId} =await auth()
    if(!userId) throw new Error("Unauthorized")

        const user = await db.user.findUnique({
            where:{
                clerkUserId : userId
            }
        })
        if(!user) throw new Error("User not found")
            try {
        // transaction means that if one of these is fails , transaction will fail
        const result = await db.$transaction(
            async(tx)=>{
 // find if the industry exists
 let industryInsight = await  tx.industryInsight.findUnique({
    where :{
        industry :data.industry,
    }
 })
 
 // if industry doesn't exist , create it with default values-will replace it with later
if(!industryInsight) {
    const insights = await generateAIInsights(data.industry);
     industryInsight = await db.industryInsight.create({
       data :{
           industry : data.industry,
           ...insights,
           nextUpdate: new Date(Date.now() + 7 * 24* 60 *60 *1000)
   
       }
    })
}
                // update the user
                const updatedUser = await tx.user.update({
                    where :{
                       id :user.id 
                    },  data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills,
                      },
                })
                return {updatedUser,industryInsight}
            },{
                timeout :10000,
            }
        )
        
               
return {success:true, ...result};
            } catch (error) {
                console.error("Error updateing user and industry :",error.message)
                throw new Error("failed to update profile" + error.message)
                
            }

}


export async function getUserOnboardingStatus(data){

    const {userId} =await auth()
    if(!userId) throw new Error("Unauthorized")
// console.log(userId)
        const user = await db.user.findUnique({
            where:{
                clerkUserId : userId
            }
        })
        if(!user) throw new Error("User not found")
      
  try {
    const user = await db.user.findUnique({
        where:{
            clerkUserId : userId
        },select :{
            industry :true,
        },
    })
    // console.log("user",user)
    // console.log(!!user?.industry)
    // console.log("inOnboarded : !!user?.industry,",!!user?.industry,)
    return {isOnboarded : !!user?.industry,}
  } catch (error) {
    console.error("Error checking onboarding status:",error.message);
    throw new Error("Failed to check onboarding status")
  }
}

