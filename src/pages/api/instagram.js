// pages/api/instagram.js
import fetch from 'node-fetch';

export default async (req, res) => {
  const INSTAGRAM_ACCESS_TOKEN = 'EAAa1r5F7RlsBOyYHQXkJLZA6m5ZAuvwrKDWyQtBdCOSmUjjalUNqYVSxfAPcRJL3J025oavQyEiQ2Dq5dRmQx8tBUodEhVWJPsn8Q2XUYYZBdUFf3zTJr5i8w2msAGunzHbGdzQUkDLbeA72JoYOZB5pWBxkEDMQuIszu0orDQVGijcyEOa4YyzxrGOWXJdycKfHLUmF21g0ZCn4JcQZDZD';

  const userId = '961147822353557'; // Replace with the Instagram User ID

  const response = await fetch(
    `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url&access_token=${INSTAGRAM_ACCESS_TOKEN}`
  );
  console.log("ins data   ---> ", response);

  const data = await response.json();
  res.status(200).json(data);
};
