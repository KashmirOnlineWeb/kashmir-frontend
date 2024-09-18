import speakeasy from "speakeasy";

export default function handler(req, res) {
  console.log({ req })
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  const { secret, token } = req.body;
  console.log(token, " token inside api verify")
  console.log(secret, " secret inside api verify")
  try {
    const verified = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token
    });
    console.log({ verified })
    res.status(200).json({ verified });
  } catch (error) {
    res.status(500).json({ error: 'Error verifying token' });
  }
}
