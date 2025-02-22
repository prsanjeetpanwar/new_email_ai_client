import { db } from "~/server/db"

export const POST =async (req:Request)=>{
  const {data}=await req.json()
 console.log('data',data)
 const id =data.id
 const emailAddress = data.emailAddresses?.[0]?.emailAddress 
 const firstName = data.firstName 
 const lastName = data.lastName 
 const imageUrl = data.imageUrl 


await db.user.create({
  data: {
    id: id,
    emailAddress,
    firstName,
    lastName,
    imageUrl,
  },
});
 console.log("Webhook data:", data);
  return new Response('webook received',{status:200})
}