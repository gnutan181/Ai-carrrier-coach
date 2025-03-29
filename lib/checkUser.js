import { currentUser } from "@clerk/nextjs/server";
// import { currentUser } from "@clerk/nextjs/dist/types/server";
import { db } from "./prisma";

export const checkUser =async()=>{
    const user = await currentUser()
// console.log(user,"user")
    if(!user){
        return null ;
    }

    try {
     const loggedInUser= await db.user.findUnique({
            where :{
                clerkUserId:user.id
            }
        })
        // console.log(loggedInUser,"loggedInUser")
   if(loggedInUser){
    return loggedInUser;
   }
   const name=`${user.firstName} ${user.lastName}`;
//    console.log(name,"name")
   const newUser=   await db.user.create({
    data :{
        clerkUserId:user.id,
        name,
        imageUrl : user.imageUrl,
        email : user.emailAddresses[0].emailAddress
    }

})
// console.log("newUser",newUser)
return newUser;
    } catch (error) {
        console.log((error.message))
    }
}