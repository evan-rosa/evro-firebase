import nodemailer from 'nodemailer';
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

export const config = {
  api: {
    externalResolver: true,
  },
}

const emailAPI = function(event, context, callback) {

  const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_SECRET, // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
  );

  oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
  });
  const accessToken = oauth2Client.getAccessToken()

  let data = JSON.stringify(event.body);

  var dataParsed = JSON.parse(data);  
    
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
          type: "OAuth2",
          user: "erosa26@gmail.com", 
          clientId: process.env.GMAIL_CLIENT_ID,
          clientSecret: process.env.GMAIL_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: accessToken
    }
  });

  const mailOptions = {
    from: "erosa26@gmail.com",
    to: "erosa26@gmail.com",
    subject: dataParsed.subject,
    generateTextFromHTML: true,
    html: `
    <h3>Email from ${dataParsed.name} ${dataParsed.email}<h3>
    <p>${dataParsed.message}<p>
    `
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        callback(error);
    } else {
        callback(null, {
        statusCode: 200,
        body: JSON.stringify({
               'result': 'success'
            })
    });
    }
});
}

export default emailAPI;