import type { NextApiRequest, NextApiResponse } from "next";

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, telephone, email, gymName } = req.body;

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE,
      {
        email_address: req.body.email,
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          EMAIL: email,
          PHONE: telephone,
          GYM: gymName,
        },
        status: "subscribed",
        tags: ["gym"],
      }
    );
    res.status(200).json({ tags: ["gym"] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to add member" });
  }
};

export default handler;
