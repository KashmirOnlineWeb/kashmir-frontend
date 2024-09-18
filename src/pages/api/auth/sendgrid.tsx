import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from 'next';
import sendEmail from './sendEmail'; // Adjust the import path based on your project structure


interface EmailData {
  name?: string;
  email?: string;
  mobile?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'POST') {
    const data: EmailData = req.body;
    try {
      await sendEmail(data, res);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      // res.status(error?.statusCode || 500).json({ error: error?.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}