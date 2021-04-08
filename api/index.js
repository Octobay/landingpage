import express from "express";
import Mailchimp from "mailchimp-api-v3";

// ASK RICK FOR MAILCHIMP API KEYS
const apiKey = process.env.MAILCHIMP_API_KEY || MAILCHIMP_API_KEY;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID || MAILCHIMP_API_KEY;
const mailchimp = new Mailchimp(apiKey);

const app = express();
app.use(express.json());

app.post("/subscribe", async (req, res) => {
  const { email: email_address } = req.body;
  try {
    const response = await mailchimp.request({
      method: "post",
      path: `/lists/${audienceId}/members`,
      body: {
        email_address,
        status: "subscribed"
      }
    });
    const { _links, ...result } = response;
    res.status(result.statusCode).json(result);
  } catch (err) {
    res.status(err.status).send(err.detail);
  }
});

export default {
  path: "/api",
  handler: app
};
