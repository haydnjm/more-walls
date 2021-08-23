import type { NextApiRequest, NextApiResponse } from "next";

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE,
      {
        email_address: req.body.email,
        status: "subscribed",
        tags: ["climber"],
      }
    );
    res.status(200).json({ tags: ["climber"] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to add member" });
  }
};

export default handler;
