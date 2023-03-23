import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const { data } = req.body;
  const text = `
    Name: ${data.name}
    Email: ${data.email}
    Subject: ${data.subject}
    Message: ${data.message}`;

  console.log(text);
  await axios.post(
    "https://hooks.slack.com/services/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",
    {
      text,
    }
  );

  res.status(200).json({ message: "Success" });
}
