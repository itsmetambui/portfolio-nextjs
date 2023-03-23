import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const result = await axios.post(
    "https://hooks.slack.com/services/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",
    {
      data: req.body.data.data,
    }
  );

  return res.json(result);
}
