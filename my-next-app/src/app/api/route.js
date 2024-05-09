import { NextResponse } from "next/server"
import * as FormData from 'form-data'
import Mailgun from 'mailgun.js'



// In Next.js, any file inside the pages/api directory is treated as an API endpoint.
export async function POST(req, res)  {

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const mailgun = new Mailgun(FormData)

  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "key-yourkeyhere"
  })

  if(!process.env.MAILGUN_API_KEY || !process.env.ADMIN_EMAIL ) {
    return NextResponse("Incomplete credentials." , {
      status: 500,
    })
  }



  try {
    const postData = await req.json()
    const data = {
      from: `${postData.name} <${postData.email}> `,
      to: [process.env.ADMIN_EMAIL],
      name:postData.name,
      email:postData.email,
      subject: postData.subject,
      html:`<h1>${"You have received new messages, please log in to view the messages: http://localhost:3000/"}</h1>`

    }

    const response = await mg.messages.create(process.env.MAILGUN_SANDBOX_URL, data)
 
    console.log(response)
   

    return NextResponse.json({message:"Email sent successfully!" }, {status: 200},)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({message: "Failed to send email!" }, {status: 500},)
  }
}

















// Inspiration: https://www.npmjs.com/package/mailgun.js?utm_source=recordnotfound.com
// https://nextjs.org/docs/getting-started/project-structure

/*// Use Postman to send the GET request to: http://localhost:3000/api/.
export async function GET() {
  return NextResponse.json({ message: "Hello World from a GET requset" }, { status: 200 });
}

// Use Postman to send the POST request to: http://localhost:3000/api/.
export async function POST() {
  return NextResponse.json({ message: "Hello World from a POST request" }, { status: 200 });
}*/

// https://stackoverflow.com/questions/75418329/how-do-you-put-api-routes-in-the-new-app-folder-of-next-js
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// https://nextjs.org/docs/app/building-your-application/routing