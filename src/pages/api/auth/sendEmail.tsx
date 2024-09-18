import sendgrid from "@sendgrid/mail";
import { NextApiResponse } from 'next';

sendgrid.setApiKey("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");

interface EmailData {
  body?: any;
  name?: string;
  email?: string;
  mobile?: string;
  message?:string;
}

async function sendEmail(data: EmailData, res: NextApiResponse): Promise<void> {
  try {
    await sendgrid.send({
      to: "support@kashmironline.com",
      from: "amanthakur@webopstechnologies.com",
      subject: `Contact form submission from ${data.body.name}`,
      html: `<p>You have a new contact form submission</p><br>
             <p><strong>Name: </strong> ${data.body.name} </p><br>
             <p><strong>Email: </strong> ${data.body.email} </p><br>
             <p><strong>Mobile: </strong> ${data.body.mobile} </p><br>
             <p><strong>Message: </strong> ${data.body.message} </p><br>`,
             
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return res.status(error?.statusCode || 500).json({ error: error?.message });
  }
  return res.status(200).json({ success: true });
}



export default sendEmail;

